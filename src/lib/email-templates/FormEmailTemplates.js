export const FormEmailTemplates = ({ fullName, email, phone, company, message, pageUrl }) => {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prospect Details</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500&display=swap"
        rel="stylesheet">
    <style>
        body, html {
            margin: 0;
            padding: 0;
            width: 100%;
            font-family: 'Archivo', sans-serif;
        }

        body {
            width: 640px;
            margin: auto;
        }

        * {
            box-sizing: border-box;
        }

        .logo {
            text-align: center;
            padding-top: 30px;
            padding-bottom: 30px;
        }

        .line {
            border: 1px solid #CFCFCF40;
        }

        .heading {
            text-align: center;
            color: #29676D;
            font-size: 30px;
            font-weight: 500;
            line-height: 130%;
        }

    .container {
      background-color: #f7f7f7;
      border: 1px solid #dadada;
      border-radius: 16px;
      padding: 32px 24px;
      text-align: left;
    }

    .form-group {
      margin-bottom: 20px;
    }

    .label {
      font-size: 14px;
      font-weight: 500;
      color: #696969;
      margin-bottom: 6px;
    }

    .value {
      background: white;
      border: 1px solid #dcdcdc;
      border-radius: 8px;
      padding: 10px 14px;
      font-size: 15px;
      color: #333;
    }
    </style>
</head>

<body>
    <div>
        <header class="logo">
           <center>
            <img src="https://www.satupharmtech.com/assets/BrandLogo.png" alt="Logo" width="200" />
            </center>
        </header>
        <hr class="line">

        <div class="heading">
            <p>Prospect Details</p>
        </div>

        
        <div class="container">
      <div class="form-group">
        <div class="label">Full Name</div>
        <div class="value">${fullName}</div>
      </div>
      <div class="form-group">
        <div class="label">Email Address</div>
        <div class="value">${email}</div>
      </div>
      <div class="form-group">
        <div class="label">Phone Number</div>
        <div class="value">${phone || 'Not provided'}</div>
      </div>
      <div class="form-group">
        <div class="label">Company Name</div>
        <div class="value">${company || 'Not provided'}</div>
      </div>
      <div class="form-group">
        <div class="label">Message</div>
        <div class="value">${message}</div>
      </div>
      <div class="form-group">
        <div class="label">Submitted From</div>
        <div class="value">${pageUrl}</div>
      </div>
    </div>
    </div>
</body>

</html>

`;
};
