import os
import shutil
import sqlite3
from datetime import datetime
appdata = os.environ.get('APPDATA')
if not appdata:
    raise SystemExit('APPDATA not set')
db_path = os.path.join(appdata, 'Code', 'User', 'globalStorage', 'state.vscdb')
if not os.path.exists(db_path):
    raise SystemExit(f'missing db: {db_path}')
backup_path = db_path + '.' + datetime.now().strftime('%Y%m%d%H%M%S') + '.bak'
shutil.copy2(db_path, backup_path)
print('backup created:', backup_path)
conn = sqlite3.connect(db_path)
cur = conn.cursor()
cur.execute("DELETE FROM ItemTable WHERE key='extensionsEnablement/malicious'")
deleted = cur.rowcount
conn.commit()
cur.execute("SELECT COUNT(*) FROM ItemTable WHERE key='extensionsEnablement/malicious'")
remaining = cur.fetchone()[0]
conn.close()
print('deleted rows:', deleted)
print('remaining rows with key extensionsEnablement/malicious:', remaining)
