from math import radians, cos, sin, asin, sqrt

ER = 6372.8


def haversin(lng1, lat1, lng2, lat2):
    lat1 = radians(lat1)
    lng1 = radians(lng1)
    lat2 = radians(lat2)
    lng2 = radians(lng2)

    lat = lat2 - lat1
    lng = lng2 - lng1
    d = sin(lat / 2) ** 2 + cos(lat1) * cos(lat2) * sin(lng / 2) ** 2

    return ER * 2 * asin(sqrt(d))


def harversin2(lng1, lat1, lng2, lat2):
    lat1 = radians(lat1)
    lng1 = radians(lng1)
    lat2 = radians(lat2)
    lng2 = radians(lng2)

    lat = lat2 - lat1
    lng = lng2 - lng1
    d = sin(lat / 2) ** 2 + cos(lat1) * cos(lat2) * sin(lng / 2) ** 2

    return ER * 2 * asin(sqrt(d))


def _haversine_kernel(lat1, lng1, lat2, lng2):

    # uint256 dlat = absolute(lat2 - lat1);
    # uint256 dlon = absolute(lon2 - lon1);
    # int256 sin_lat = Trigonometry.sin(dlat / 2);
    # int256 sin_long = Trigonometry.sin(dlon / 2);
    # int256 cos_lat1 = Trigonometry.cos(absolute(lat1));
    # int256 cos_lat2 = Trigonometry.cos(absolute(lat2));

    lat1 = radians(lat1)
    lng1 = radians(lng1)
    lat2 = radians(lat2)
    lng2 = radians(lng2)

    dlat = lat2 - lat1
    dlon = lng2 - lng1

    sin_lat = sin(dlat / 2)
    sin_lon = sin(dlon / 2)
    cos_lat1 = cos(lat1)
    cos_lat2 = cos(lat2)
    sin_lat2 = sin_lat * sin_lat
    sin_lon2 = sin_lon * sin_lon

    lng = lng2 - lng1
    d = sin_lat2 + cos_lat1 * cos_lat2 * sin_lon2

    return ER * 2 * asin(sqrt(d))


# Usage
# lon1 = -103.548851
# lat1 = 32.0004311
# lon2 = -103.6041946
# lat2 = 33.374939

lon1 = 2.483300
lat1 = 48.866699
lon2 = -57.969559
lat2 = -34.920345

# lon1 = -73.935242
# lat1 = 40.730610
# lon2 = -118.243683
# lat2 = 4.052235

# print(haversin(lon1, lat1, lon2, lat2))
# print(harversin2(lon1, lat1, lon2, lat2))


from haversine import haversine, Unit

lyon = (lat1, lon1)  # (lat, lon)
paris = (lat2, lon2)

# print(haversine(lyon, paris))
print(_haversine_kernel(lat1, lon1, lat2, lon2))
