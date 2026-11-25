"""Generate all missing/revised audio files from lessons.js; requires node, espeak, ffmpeg."""
from pathlib import Path
import subprocess, json, concurrent.futures, hashlib
root=Path(__file__).resolve().parent
lessons=json.loads(subprocess.check_output(['node','-e',f"const fs=require('fs');eval(fs.readFileSync({json.dumps(str(root/'lessons.js'))},'utf8')+';console.log(JSON.stringify(lessons))')"],text=True))
manifest_path=root/'audio'/'manifest.json'
old=json.loads(manifest_path.read_text()) if manifest_path.exists() else {}
manifest={}; tasks=[]
for l in lessons:
 for g in ['reading','short','vocab','listen']:
  entries=list(enumerate(l[g]))
  if g in ('reading','short'): entries.append(('full',[' '.join(row[0] for row in l[g])]))
  for i,row in entries:
   rel=f"{l['id']}/{g}{i}.mp3"; path=root/'audio'/rel
   h=hashlib.sha256(('en-gb|145|'+row[0]).encode()).hexdigest();manifest[rel]=h
   if not path.exists() or old.get(rel)!=h: tasks.append((path,row[0]))
def make(t):
 p,s=t;p.parent.mkdir(parents=True,exist_ok=True)
 wav=subprocess.check_output(['espeak','-v','en-gb','-s','145','--stdout',s]);subprocess.run(['ffmpeg','-nostdin','-hide_banner','-loglevel','error','-y','-i','pipe:0','-codec:a','libmp3lame','-q:a','5',str(p)],input=wav,check=True)
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:list(pool.map(make,tasks))
manifest_path.write_text(json.dumps(manifest,indent=2));print(f'{len(manifest)} audio files, {len(tasks)} generated')
