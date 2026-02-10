import requests
import os

ACCESS_KEY = "mfFS-u-IjCgl2PbNnSJQ6hMtLJbmei6WRzwXiPrlp2s"

# 目标文件夹
SAVE_DIR = "../assets/images"

# 如果不存在就创建
os.makedirs(SAVE_DIR, exist_ok=True)

# 每类图片数量
COUNT = 30

# 三类关键词
topics = {
    "自然": "nature",
    "建筑": "architecture",
    "猫": "cat"
}

def fetch_images(query, per_page=30):
    url = f"https://api.unsplash.com/search/photos?query={query}&per_page={per_page}&client_id={ACCESS_KEY}"
    res = requests.get(url)
    data = res.json()
    return data.get("results", [])

def download_image(url, filepath):
    img = requests.get(url)
    if img.status_code == 200:
        with open(filepath, "wb") as f:
            f.write(img.content)

print("开始下载图片...\n")

for cname, query in topics.items():
    results = fetch_images(query, COUNT)

    for i, photo in enumerate(results, start=1):
        # 文件名：image_自然_001.jpg
        filename = f"image_{cname}_{i:03d}.jpg"
        filepath = os.path.join(SAVE_DIR, filename)

        # 高清原图（自定义大小）
        img_url = photo["urls"]["raw"] + "&w=1200&q=90&fit=crop"

        print(f"下载 {filename} ...")
        download_image(img_url, filepath)

print("\n全部下载完成！")
