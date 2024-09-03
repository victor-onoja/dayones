from math import radians, cos, sin, asin, sqrt

def haversine(lon1, lat1, lon2, lat2):
    """
    Calculate the great circle distance in kilometers between two points 
    on the earth (specified in decimal degrees)
    """
    # convert decimal degrees to radians 
    lon1, lat1, lon2, lat2 = map(radians, [lon1, lat1, lon2, lat2])

    # haversine formula 
    dlon = lon2 - lon1 
    dlat = lat2 - lat1 
    a = sin(dlat/2)**2 + cos(lat1) * cos(lat2) * sin(dlon/2)**2
    c = 2 * asin(sqrt(a)) 
    r = 6371 # Radius of earth in kilometers. Use 3956 for miles. Determines return value units.
    return c * r

# Usage
lon1 = -103.548851
lat1 = 32.0004311
lon2 = -103.6041946
lat2 = 33.374939

print(haversine(lat1, lon1, lat2, lon2))


# from haversine import haversine, Unit

# lyon = (45.7597, 4.8422) # (lat, lon)
# paris = (48.8567, 2.3508)

# haversine(lyon, paris)
# >> 392.2172595594006  # in kilometers

# haversine(lyon, paris, unit=Unit.MILES)
# >> 243.71250609539814  # in miles

# # you can also use the string abbreviation for units:
# haversine(lyon, paris, unit='mi')
# >> 243.71250609539814  # in miles

# haversine(lyon, paris, unit=Unit.NAUTICAL_MILES)
# >> 211.78037755311516  # in nautical miles
