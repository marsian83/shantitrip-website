import os


def find_files(path):
    file_paths = []
    for root, dirs, files in os.walk(path):
        for file in files:
            if 'public' in root:
                file_path = os.path.join(root, file)
                file_path = os.path.relpath(file_path, start='public')
                file_path = '/'+file_path.replace('\\', '/')
                file_paths.append(file_path)
    return file_paths


print('input path : ', end="")
path = input()
print(find_files(path))
