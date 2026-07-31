import os
import smtplib
from email.message import EmailMessage
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

SMTP_SERVER = os.environ.get('SMTP_SERVER', 'smtp.yandex.ru')
SMTP_PORT = int(os.environ.get('SMTP_PORT', 587))
SMTP_LOGIN = os.environ.get('SMTP_LOGIN', '')
SMTP_PASSWORD = os.environ.get('SMTP_PASSWORD', '')
NOTIFY_EMAIL = os.environ.get('NOTIFY_EMAIL', '')

@app.route('/api/send-request', methods=['POST'])
def send_request():
    data = request.json
    name = data.get('name', '').strip()
    phone = data.get('phone', '').strip()
    email = data.get('email', '').strip()
    message = data.get('message', '').strip()

    if not name or not phone or not email:
        return jsonify({'ok': False, 'error': 'Заполните все поля'}), 400

    body = f"""
    Новая заявка с сайта tretyakov-coach.ru

    Имя: {name}
    Телефон: {phone}
    Email: {email}
    Сообщение: {message or '—'}
    """

    try:
        msg = EmailMessage()
        msg.set_content(body.strip())
        msg['Subject'] = f'Заявка с сайта — {name}'
        msg['From'] = SMTP_LOGIN
        msg['To'] = NOTIFY_EMAIL

        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as s:
            s.starttls()
            s.login(SMTP_LOGIN, SMTP_PASSWORD)
            s.send_message(msg)

        return jsonify({'ok': True})
    except Exception as e:
        return jsonify({'ok': False, 'error': str(e)}), 500

@app.route('/health')
def health():
    return 'ok'

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
