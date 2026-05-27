import resend

resend.api_key = "re_ZvGzdY41_8QtkNWDMUuV3tSsYYQ1sq4ae"

def send_mail(email: str, subject: str, content: str):
    r = resend.Emails.send({
    "from": "shop@etoile.net.pl",
    "to": email,
    "subject": subject,
    "html": content
    })