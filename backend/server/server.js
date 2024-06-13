const express = require('express');
const path = require('path');
const notificationService = require('../services/notificationService')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../../frontend')));
app.use('/frontend', express.static(path.join(__dirname, '../../')));
app.use('/backend', express.static(path.join(__dirname, '../')));

app.post('/api/notify', async (req, res) => {
    const { email, subject, message } = req.body;
    if (!email || !subject || !message) {
        return res.status(400).send('Пропущены Имя, email или сообщение');
    }
    try {
        await notificationService.sendNotification(email, subject, message);
        res.status(200).send('Сообщение отправлено успешно.');
    } catch (error) {
        console.error('Уведомление об ошибке:', error);
        res.status(500).send('Ошибка отпарвки уведомления.');
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/404.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});