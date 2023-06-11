# from datetime import datetime


# class BlogPost:
#     def __init__(self, title, description, publish_timestamp):
#         self.title = title
#         self.description = description
#         self.publish_timestamp = publish_timestamp


# def output_blog_post(blog_post):
# # def print_blog_post(item):
#     print('Title: ' + blog_post.title)
#     print('Description: ' + blog_post.description)
#     print('Published: ' + blog_post.publish_timestamp)


# title = 'Clean Code Is Great!'
# description = 'Actually, writing Clean Code can be pretty fun. You\'ll see!'
# #now = datetime.now()
# current_date = datetime.now()
# formatted_date = current_date.strftime('%Y-%m-%d %H:%M')

# blog_post = BlogPost(title, description, formatted_date)

# output_blog_post(blog_post)




from datetime import datetime


class BlogPost:
    def __init__(self, title, description, publish_timestamp):
        self.title = title
        self.description = description
        self.publish_timestamp = publish_timestamp

    def output(self):
        print('Title: ' + self.title)
        print('Description: ' + self.description)
        print('Published: ' + self.publish_timestamp)





title = 'Clean Code Is Great!'
description = 'Actually, writing Clean Code can be pretty fun. You\'ll see!'
#now = datetime.now()
current_date = datetime.now()
formatted_date = current_date.strftime('%Y-%m-%d %H:%M')

blog_post = BlogPost(title, description, formatted_date)


blog_post.output()
