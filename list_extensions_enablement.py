import os
import sqlite3
appdata = os.environ.get('APPDATA')
if not appdata:
    raise SystemExit('APPDATA not set')
db_path = os.path.join(appdata, 'Code', 'User', 'globalStorage', 'state.vscdb')
print('db:', db_path)
if not os.path.exists(db_path):
    raise SystemExit('missing db')
conn = sqlite3.connect(db_path)
cur = conn.cursor()
cur.execute("SELECT rowid, key, LENGTH(value) FROM ItemTable WHERE key LIKE 'extensionsEnablement/%' ORDER BY key")
rows = cur.fetchall()
for row in rows:
    print(row)
conn.close()
