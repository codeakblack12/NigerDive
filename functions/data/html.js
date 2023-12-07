const html= `<html>
                    <head>
                        <meta charset="utf-8">
                        <title>Welcome to NigerDive</title>
                        <style>
                        /* Card container */
                        .card {
                            background-color: #fff;
                            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                            max-width: 500px;
                            margin: 0 auto;
                            padding: 20px;
                            text-align: center;
                        }

                        /* Checkmark icon */
                        .icon {
                            width: 50px;
                            height: 50px;
                            margin: 0 auto;
                        }

                        /* Login button */
                        .button {
                            background-color: #4f8af6;
                            color: #fff;
                            padding: 15px 30px;
                            border-radius: 5px;
                            display: inline-block;
                            margin-top: 20px;
                            text-decoration: none;
                        }
                        </style>
                    </head>
                    <body>
                        <div class="card">
                        <img src="https://example.com/your-logo.png" alt="Your Company Logo" style="display:block;">
                        <img src="https://cdn-icons-png.flaticon.com/512/660/660700.png" alt="Checkmark Icon" class="icon">
                        <h1 style="color: #4f8af6;">Welcome to NigerDive</h1>
                        <p>We are excited to have you here. Your account has been created. Please see your login details below:</p>
                        <p>Username: <strong>user123</strong></p>
                        <p>Password: <strong>********</strong></p>
                        <h2>Kindly change your password after a successful login</h2>
                        <a href="https://example.com/login" class="button">Login Here</a>
                        </div>
                    </body>
                    </html>
            `