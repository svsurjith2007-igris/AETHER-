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
cur.execute("SELECT name FROM sqlite_master WHERE type='table'")
print('tables:', cur.fetchall())
patterns = [
    '%extensionsEnablement%',
    '%extensionsEnablement/%',
    '%extensionsEnablement/%',
    '%extensionsEnablement',
    '%extensions%'
]
for pattern in patterns:
    print('\npattern:', pattern)
    for row in cur.execute('SELECT key, value FROM ItemTable WHERE key LIKE ? ORDER BY key', (pattern,)):
        print(row)
conn.close()
