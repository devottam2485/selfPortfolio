from knowledge_and_experience import views
from django.conf.urls import url

app_name = 'KandE'

urlpatterns = [
    url(r'about_me/$', views.about_me, name="about_me"),
    # url(r'certificates/$', views.cerificates, name="certificates"),
    url(r'education/$', views.education, name="education"),
    url(r'experiences/$', views.experience, name="experience"),
    url(r'skills/$', views.skills, name="skills"),
    # url(r'know_me/$', views.know_me, name="know_me"),
]
