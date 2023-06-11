class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y


class Rectangle:
    def __init__(self, origin, length, height):
        self.origin = origin
        self.length = length
        self.height = height

    def get_area(self):
        return self.length * self.height

    def print_points(self):
        top_right_point = self.origin.x + self.length
        bottom_left_point = self.origin.y + self.height
        print('Starting Point (X)): ' + str(self.origin.x))
        print('Starting Point (Y)): ' + str(self.origin.y))
        print('End Point X-Axis (Top Right): ' + str(top_right_point))
        print('End Point Y-Axis (Bottom Left): ' + str(bottom_left_point))


def build_rectangle():
    rectangle_origin = Point(50, 100)
    return Rectangle(rectangle_origin, 90, 10)




rectangle = build_rectangle()

print(rectangle.get_area())
rectangle.print_points()