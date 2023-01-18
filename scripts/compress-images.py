import os
import shutil


def compress_images(folder):
    for root, dirs, files in os.walk(folder):
        for file in files:
            if file.endswith(".jpg") or file.endswith(".jpeg") or file.endswith(".png") or file.endswith('.webp'):
                source = os.path.join(root, file)
                destination = os.path.join(root, 'compressed_' + file)
                shutil.copy2(source, destination)
                print('compressing' + destination)
                os.system("convert " + destination +
                          " -quality 90% " + destination)


compress_images("E:/dev/web/shantitrip/shantitrip/public/images")
