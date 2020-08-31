from django.shortcuts import render

# Create your views here.
def base(request):
    return render(request, "KandE/base.html")

# def home(request):
#     return render(request, "KandE/home.html")

def about_me(request):
    return render(request, "KandE/about_me.html")

# def cerificates(request):
#     return render(request, "KandE/certificates.html")

def education(request):
    return render(request, "KandE/education.html")

def experience(request):
    return render(request, "KandE/experiences.html")

def skills(request):
    return render(request, "KandE/skills.html")

# def know_me(request):
#     return render(request, "KandE/know_me.html")
