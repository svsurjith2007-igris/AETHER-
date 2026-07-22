import os
import sqlite3
appdata = os.environ.get('APPDATA')
if not appdata:
    raise SystemExit('APPDATA not set')
path = os.path.join(appdata, 'Code', 'User', 'globalStorage', 'state.vscdb')
print('db:', path)
if not os.path.exists(path):
    raise SystemExit('missing db')
conn = sqlite3.connect(path)
cur = conn.cursor()
cur.execute("SELECT name FROM sqlite_master WHERE type='table'")
print('tables:', cur.fetchall())
cur.execute("SELECT key, value FROM ItemTable WHERE key LIKE ? OR key LIKE ? OR key LIKE ? OR key LIKE ? LIMIT 500", ('%extension%','%extensions%','%disabled%','%enable%'))
rows = cur.fetchall()
for row in rows:
    print(row)
conn.close()
