import subprocess, sys
venv_python = r"C:\Users\sarth\Downloads\FarmIQ-main\backend\venv\Scripts\python.exe"
script = r"C:\Users\sarth\Downloads\FarmIQ-main\backend\check_venv.py"
result = subprocess.run([venv_python, script], capture_output=True, text=True)
print(result.stdout)
print(result.stderr)
