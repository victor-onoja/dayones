from math import radians, cos, sin, asin, sqrt

ER = 6372.8

def haversin(lng1, lat1, lng2, lat2):
    lat1 = radians(lat1)
    lng1 = radians(lng1)
    lat2 = radians(lat2)
    lng2 = radians(lng2)

    lat = lat2 - lat1
    lng = lng2 - lng1
    d = (sin(lat / 2) ** 2 + cos(lat1) * cos(lat2) * sin(lng / 2) ** 2)
    
    return ER * 2 * asin(sqrt(d))

def harversin2(lng1, lat1, lng2, lat2):
    lat1 = radians(lat1)
    lng1 = radians(lng1)
    lat2 = radians(lat2)
    lng2 = radians(lng2)

    lat = lat2 - lat1
    lng = lng2 - lng1
    d = (sin(lat / 2) ** 2 + cos(lat1) * cos(lat2) * sin(lng / 2) ** 2)
    
    return ER * 2 * asin(sqrt(d))


def _haversine_kernel(lat1, lng1, lat2, lng2):
    lat1 = radians(lat1)
    lng1 = radians(lng1)
    lat2 = radians(lat2)
    lng2 = radians(lng2)

    lat = lat2 - lat1
    print(lat)
    lng = lng2 - lng1
    d = (sin(lat / 2) ** 2 + cos(lat1) * cos(lat2) * sin(lng / 2) ** 2)
    print(d)
    print(sqrt(d))
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

print(haversin(lon1, lat1, lon2, lat2))
print(harversin2(lon1, lat1, lon2, lat2))


from haversine import haversine, Unit

lyon = (lat1, lon1) # (lat, lon)
paris = (lat2, lon2)

print(haversine(lyon, paris))
print(_haversine_kernel(lat1, lon1, lat2, lon2))
