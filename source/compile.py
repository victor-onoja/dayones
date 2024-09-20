import pathlib

baby = "baby"
print(pathlib.PurePath(r"out").joinpath(f"{baby}.sol", f"{baby}.json"))
