const getEmailContentWithVerifyLink = (linkToVerify: string) => {
  return `<!DOCTYPE html>
  <html
    xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
    lang="en">
    <head>
      <title></title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <!--[if mso
        ]><xml
          ><o:OfficeDocumentSettings
            ><o:PixelsPerInch>96</o:PixelsPerInch
            ><o:AllowPNG /></o:OfficeDocumentSettings></xml
      ><![endif]-->
      <!--[if !mso]><!-->
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900"
        rel="stylesheet"
        type="text/css" />
      <!--<![endif]-->
      <style>
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900");
        * {
          box-sizing: border-box;
        }
  
        body {
          margin: 0;
          padding: 0;
        }
  
        a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: inherit !important;
        }
  
        #MessageViewBody a {
          color: inherit;
          text-decoration: none;
        }
  
        p {
          line-height: inherit;
        }
  
        .desktop_hide,
        .desktop_hide table {
          mso-hide: all;
          display: none;
          max-height: 0px;
          overflow: hidden;
        }
  
        .image_block img + div {
          display: none;
        }
  
        @media (max-width: 768px) {
          .row-1 .column-2 .block-1.social_block .alignment table,
          .social_block.desktop_hide .social-table {
            display: inline-block !important;
          }
  
          .mobile_hide {
            display: none;
          }
  
          .row-content {
            width: 100% !important;
          }
  
          .stack .column {
            width: 100%;
            display: block;
          }
  
          .mobile_hide {
            min-height: 0;
            max-height: 0;
            max-width: 0;
            overflow: hidden;
            font-size: 0px;
          }
  
          .desktop_hide,
          .desktop_hide table {
            display: table !important;
            max-height: none !important;
          }
  
          .reverse {
            display: table;
            width: 100%;
          }
  
          .reverse .column.first {
            display: table-footer-group !important;
          }
  
          .reverse .column.last {
            display: table-header-group !important;
          }
  
          .row-1 td.column.first .border {
            padding: 0 0 5px;
            border-top: 0;
            border-right: 0px;
            border-bottom: 0;
            border-left: 0;
          }
  
          .row-1 td.column.last .border {
            padding: 5px 30px;
            border-top: 0;
            border-right: 0px;
            border-bottom: 4px solid transparent;
            border-left: 0;
          }
  
          .row-1 .column-1 .block-1.image_block td.pad {
            padding: 5px 0 0 !important;
          }
  
          .row-1 .column-1 .block-1.image_block .alignment div {
            margin: 0 auto !important;
          }
  
          .row-2 .column-1 .block-1.divider_block td.pad {
            padding: 5px 10px 20px !important;
          }
  
          .row-2 .column-1 .block-1.divider_block .alignment table,
          .row-4 .column-1 .block-3.divider_block .alignment table {
            display: inline-table;
          }
  
          .row-3 .column-1 .block-1.heading_block h1 {
            text-align: center !important;
            font-size: 16px !important;
          }
  
          .row-3 .column-1 .block-1.heading_block td.pad {
            padding: 0 5px 5px 10px !important;
          }
  
          .row-1 .column-2 .block-1.social_block .alignment {
            text-align: center !important;
          }
  
          .row-1 .column-1 .border,
          .row-1 .column-2 .block-1.social_block td.pad,
          .row-4 .column-1 .block-1.button_block td.pad,
          .row-5 .column-1 .block-2.social_block td.pad {
            padding: 0 !important;
          }
  
          .row-3 .column-1 .block-2.paragraph_block td.pad > div {
            text-align: justify !important;
            font-size: 12px !important;
          }
  
          .row-3 .column-1 .block-2.paragraph_block td.pad {
            padding: 25px 10px 0 !important;
          }
  
          .row-4 .column-1 .block-3.divider_block td.pad {
            padding: 20px 10px 5px !important;
          }
  
          .row-4 .column-1 .block-1.button_block a,
          .row-4 .column-1 .block-1.button_block div,
          .row-4 .column-1 .block-1.button_block span {
            font-size: 13px !important;
            line-height: 26px !important;
          }
  
          .row-4 .column-1 .block-1.button_block .alignment a,
          .row-4 .column-1 .block-1.button_block .alignment div {
            width: 60% !important;
          }
  
          .row-4 .column-1 .block-2.paragraph_block td.pad > div {
            font-size: 12px !important;
          }
  
          .row-4 .column-1 .block-2.paragraph_block td.pad {
            padding: 20px 10px 10px !important;
          }
  
          .row-5 .column-1 .block-1.paragraph_block td.pad > div {
            font-size: 10px !important;
          }
  
          .row-3 .column-1 {
            padding: 5px !important;
          }
  
          .row-4 .column-1 {
            padding: 20px 0 0 !important;
          }
        }
      </style>
    </head>
  
    <body
      style="
        background-color: #ffffff;
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: none;
        text-size-adjust: none;
      ">
      <table
        class="nl-container"
        width="100%"
        border="0"
        cellpadding="0"
        cellspacing="0"
        role="presentation"
        style="
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          background-color: #ffffff;
        ">
        <tbody>
          <tr>
            <td>
              <table
                class="row row-1"
                align="center"
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt">
                <tbody>
                  <tr>
                    <td>
                      <table
                        class="row-content stack"
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-radius: 0;
                          color: #000000;
                          width: 900px;
                          margin: 0 auto;
                        "
                        width="900">
                        <tbody>
                          <tr class="reverse">
                            <td
                              class="column column-1 first"
                              width="50%"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 5px;
                                vertical-align: middle;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              ">
                              <div class="border">
                                <table
                                  class="image_block block-1"
                                  width="100%"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  ">
                                  <tr>
                                    <td
                                      class="pad"
                                      style="
                                        padding-top: 30px;
                                        width: 100%;
                                        padding-right: 0px;
                                        padding-left: 0px;
                                      ">
                                      <div
                                        class="alignment"
                                        align="left"
                                        style="line-height: 10px">
                                        <div style="max-width: 157.5px">
                                          <img
                                            src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/1124565_1110078/logo-no-background.png"
                                            style="
                                              display: block;
                                              height: auto;
                                              border: 0;
                                              width: 100%;
                                            "
                                            width="157.5" />
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </td>
                            <td
                              class="column column-2 last"
                              width="50%"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                border-bottom: 4px solid transparent;
                                padding-bottom: 5px;
                                padding-left: 30px;
                                padding-right: 30px;
                                padding-top: 5px;
                                vertical-align: middle;
                                border-top: 0px;
                                border-right: 0px;
                                border-left: 0px;
                              ">
                              <div class="border">
                                <table
                                  class="social_block block-1 mobile_hide"
                                  width="100%"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  ">
                                  <tr>
                                    <td
                                      class="pad"
                                      style="
                                        padding-top: 30px;
                                        text-align: right;
                                        padding-right: 0px;
                                        padding-left: 0px;
                                      ">
                                      <div class="alignment" align="right">
                                        <table
                                          class="social-table"
                                          width="208px"
                                          border="0"
                                          cellpadding="0"
                                          cellspacing="0"
                                          role="presentation"
                                          style="
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                            display: inline-block;
                                          ">
                                          <tr>
                                            <td style="padding: 0 0 0 20px">
                                              <a href target="_blank"
                                                ><img
                                                  src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-dark-gray/facebook@2x.png"
                                                  width="32"
                                                  height="32"
                                                  alt="Facebook"
                                                  title="facebook"
                                                  style="
                                                    display: block;
                                                    height: auto;
                                                    border: 0;
                                                  "
                                              /></a>
                                            </td>
                                            <td style="padding: 0 0 0 20px">
                                              <a href target="_blank"
                                                ><img
                                                  src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-dark-gray/twitter@2x.png"
                                                  width="32"
                                                  height="32"
                                                  alt="Twitter"
                                                  title="twitter"
                                                  style="
                                                    display: block;
                                                    height: auto;
                                                    border: 0;
                                                  "
                                              /></a>
                                            </td>
                                            <td style="padding: 0 0 0 20px">
                                              <a href target="_blank"
                                                ><img
                                                  src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-dark-gray/linkedin@2x.png"
                                                  width="32"
                                                  height="32"
                                                  alt="Linkedin"
                                                  title="linkedin"
                                                  style="
                                                    display: block;
                                                    height: auto;
                                                    border: 0;
                                                  "
                                              /></a>
                                            </td>
                                            <td style="padding: 0 0 0 20px">
                                              <a href target="_blank"
                                                ><img
                                                  src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-dark-gray/instagram@2x.png"
                                                  width="32"
                                                  height="32"
                                                  alt="Instagram"
                                                  title="instagram"
                                                  style="
                                                    display: block;
                                                    height: auto;
                                                    border: 0;
                                                  "
                                              /></a>
                                            </td>
                                          </tr>
                                        </table>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="row row-2"
                align="center"
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt">
                <tbody>
                  <tr>
                    <td>
                      <table
                        class="row-content stack"
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          color: #000000;
                          width: 900px;
                          margin: 0 auto;
                        "
                        width="900">
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              width="100%"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              ">
                              <table
                                class="divider_block block-1"
                                width="100%"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                ">
                                <tr>
                                  <td
                                    class="pad"
                                    style="
                                      padding-bottom: 10px;
                                      padding-top: 15px;
                                    ">
                                    <div class="alignment" align="center">
                                      <table
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        role="presentation"
                                        width="100%"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                        ">
                                        <tr>
                                          <td
                                            class="divider_inner"
                                            style="
                                              font-size: 1px;
                                              line-height: 1px;
                                              border-top: 1px solid #bbbbbb;
                                            ">
                                            <span>&#8202;</span>
                                          </td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="row row-3"
                align="center"
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt">
                <tbody>
                  <tr>
                    <td>
                      <table
                        class="row-content stack"
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          color: #000000;
                          width: 900px;
                          margin: 0 auto;
                        "
                        width="900">
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              width="100%"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 5px;
                                padding-left: 5px;
                                padding-right: 5px;
                                padding-top: 60px;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              ">
                              <table
                                class="heading_block block-1"
                                width="100%"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                ">
                                <tr>
                                  <td
                                    class="pad"
                                    style="
                                      padding-left: 5px;
                                      padding-right: 5px;
                                      padding-top: 5px;
                                      text-align: center;
                                      width: 100%;
                                    ">
                                    <h1
                                      style="
                                        margin: 0;
                                        color: #7747ff;
                                        direction: ltr;
                                        font-family: 'Montserrat', 'Trebuchet MS',
                                          'Lucida Grande', 'Lucida Sans Unicode',
                                          'Lucida Sans', Tahoma, sans-serif;
                                        font-size: 30px;
                                        font-weight: 700;
                                        letter-spacing: normal;
                                        line-height: 120%;
                                        text-align: left;
                                        margin-top: 0;
                                        margin-bottom: 0;
                                        mso-line-height-alt: 36px;
                                      ">
                                      <span style="color: #000000"
                                        >Welcome to Retreat! We're thrilled to
                                        have you on board.</span
                                      >
                                    </h1>
                                  </td>
                                </tr>
                              </table>
                              <table
                                class="paragraph_block block-2"
                                width="100%"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  word-break: break-word;
                                ">
                                <tr>
                                  <td
                                    class="pad"
                                    style="
                                      padding-left: 10px;
                                      padding-right: 10px;
                                      padding-top: 50px;
                                    ">
                                    <div
                                      style="
                                        color: #101112;
                                        direction: ltr;
                                        font-family: 'Montserrat', 'Trebuchet MS',
                                          'Lucida Grande', 'Lucida Sans Unicode',
                                          'Lucida Sans', Tahoma, sans-serif;
                                        font-size: 21px;
                                        font-weight: 400;
                                        letter-spacing: 0px;
                                        line-height: 120%;
                                        text-align: left;
                                        mso-line-height-alt: 25.2px;
                                      ">
                                      <p style="margin: 0">
                                        Thank you for signing up! To complete your
                                        registration, please click the link below
                                        to verify your email address:
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="row row-4"
                align="center"
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt">
                <tbody>
                  <tr>
                    <td>
                      <table
                        class="row-content stack"
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          color: #000000;
                          width: 900px;
                          margin: 0 auto;
                        "
                        width="900">
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              width="100%"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 20px;
                                padding-top: 20px;
                                vertical-align: middle;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              ">
                              <table
                                class="button_block block-1"
                                width="100%"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                ">
                                <tr>
                                  <td
                                    class="pad"
                                    style="padding-top: 55px; text-align: center">
                                    <div class="alignment" align="center">
                                      <!--[if mso]>
      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href=${linkToVerify} style="height:60px;width:460px;v-text-anchor:middle;" arcsize="34%" strokeweight="3pt" strokecolor="#F1F1F1" fillcolor="#ff0000">
      <w:anchorlock/>
      <v:textbox inset="0px,0px,0px,0px">
      <center style="color:#ffffff; font-family:'Trebuchet MS', Tahoma, sans-serif; font-size:16px">
      <!
                                      [endif]--><a
                                        href="${linkToVerify}"
                                        target="_blank"
                                        style="
                                          text-decoration: none;
                                          display: block;
                                          color: #ffffff;
                                          background-color: #ff0000;
                                          border-radius: 17px;
                                          width: 50%;
                                          border-top: 4px solid #f1f1f1;
                                          font-weight: 700;
                                          border-right: 4px solid #f1f1f1;
                                          border-bottom: 4px solid #f1f1f1;
                                          border-left: 4px solid #f1f1f1;
                                          padding-top: 5px;
                                          padding-bottom: 5px;
                                          font-family: 'Montserrat',
                                            'Trebuchet MS', 'Lucida Grande',
                                            'Lucida Sans Unicode', 'Lucida Sans',
                                            Tahoma, sans-serif;
                                          font-size: 16px;
                                          text-align: center;
                                          mso-border-alt: none;
                                          word-break: keep-all;
                                        "
                                        ><span
                                          style="
                                            padding-left: 20px;
                                            padding-right: 20px;
                                            font-size: 16px;
                                            display: inline-block;
                                            letter-spacing: 2px;
                                          "
                                          ><span
                                            style="
                                              margin: 0;
                                              word-break: break-word;
                                              line-height: 32px;
                                            "
                                            >Verify Email</span
                                          ></span
                                        ></a
                                      ><!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <table
                                class="paragraph_block block-2"
                                width="100%"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  word-break: break-word;
                                ">
                                <tr>
                                  <td
                                    class="pad"
                                    style="
                                      padding-bottom: 10px;
                                      padding-left: 10px;
                                      padding-right: 10px;
                                      padding-top: 60px;
                                    ">
                                    <div
                                      style="
                                        color: #101112;
                                        direction: ltr;
                                        font-family: 'Montserrat', 'Trebuchet MS',
                                          'Lucida Grande', 'Lucida Sans Unicode',
                                          'Lucida Sans', Tahoma, sans-serif;
                                        font-size: 20px;
                                        font-weight: 300;
                                        letter-spacing: 0px;
                                        line-height: 120%;
                                        text-align: center;
                                        mso-line-height-alt: 24px;
                                      ">
                                      <p style="margin: 0">
                                        If you didn't sign up for our service,
                                        please disregard this email.
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <table
                                class="divider_block block-3"
                                width="100%"
                                border="0"
                                cellpadding="10"
                                cellspacing="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                ">
                                <tr>
                                  <td class="pad">
                                    <div class="alignment" align="center">
                                      <table
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        role="presentation"
                                        width="100%"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                        ">
                                        <tr>
                                          <td
                                            class="divider_inner"
                                            style="
                                              font-size: 1px;
                                              line-height: 1px;
                                              border-top: 1px solid #dddddd;
                                            ">
                                            <span>&#8202;</span>
                                          </td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="row row-5"
                align="center"
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt">
                <tbody>
                  <tr>
                    <td>
                      <table
                        class="row-content stack"
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          color: #000000;
                          width: 900px;
                          margin: 0 auto;
                        "
                        width="900">
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              width="100%"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 5px;
                                padding-top: 5px;
                                vertical-align: middle;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              ">
                              <table
                                class="paragraph_block block-1"
                                width="100%"
                                border="0"
                                cellpadding="10"
                                cellspacing="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  word-break: break-word;
                                ">
                                <tr>
                                  <td class="pad">
                                    <div
                                      style="
                                        color: #101112;
                                        direction: ltr;
                                        font-family: 'Montserrat', 'Trebuchet MS',
                                          'Lucida Grande', 'Lucida Sans Unicode',
                                          'Lucida Sans', Tahoma, sans-serif;
                                        font-size: 13px;
                                        font-weight: 400;
                                        letter-spacing: 0px;
                                        line-height: 120%;
                                        text-align: center;
                                        mso-line-height-alt: 15.6px;
                                      ">
                                      <p style="margin: 0">
                                        For any assistance or questions, please
                                        contact our support team at
                                        <strong>support@retreat.com</strong>.
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <table
                                class="social_block desktop_hide block-2"
                                width="100%"
                                border="0"
                                cellpadding="10"
                                cellspacing="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  mso-hide: all;
                                  display: none;
                                  max-height: 0;
                                  overflow: hidden;
                                ">
                                <tr>
                                  <td class="pad">
                                    <div class="alignment" align="center">
                                      <table
                                        class="social-table"
                                        width="144px"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          mso-hide: all;
                                          max-height: 0;
                                          overflow: hidden;
                                          display: inline-block;
                                        ">
                                        <tr>
                                          <td style="padding: 0 2px 0 2px">
                                            <a
                                              href="https://www.facebook.com/"
                                              target="_blank"
                                              ><img
                                                src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-dark-gray/facebook@2x.png"
                                                width="32"
                                                height="32"
                                                alt="Facebook"
                                                title="facebook"
                                                style="
                                                  display: block;
                                                  height: auto;
                                                  border: 0;
                                                "
                                            /></a>
                                          </td>
                                          <td style="padding: 0 2px 0 2px">
                                            <a
                                              href="https://www.twitter.com/"
                                              target="_blank"
                                              ><img
                                                src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-dark-gray/twitter@2x.png"
                                                width="32"
                                                height="32"
                                                alt="Twitter"
                                                title="twitter"
                                                style="
                                                  display: block;
                                                  height: auto;
                                                  border: 0;
                                                "
                                            /></a>
                                          </td>
                                          <td style="padding: 0 2px 0 2px">
                                            <a
                                              href="https://www.linkedin.com/"
                                              target="_blank"
                                              ><img
                                                src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-dark-gray/linkedin@2x.png"
                                                width="32"
                                                height="32"
                                                alt="Linkedin"
                                                title="linkedin"
                                                style="
                                                  display: block;
                                                  height: auto;
                                                  border: 0;
                                                "
                                            /></a>
                                          </td>
                                          <td style="padding: 0 2px 0 2px">
                                            <a
                                              href="https://www.instagram.com/"
                                              target="_blank"
                                              ><img
                                                src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-dark-gray/instagram@2x.png"
                                                width="32"
                                                height="32"
                                                alt="Instagram"
                                                title="instagram"
                                                style="
                                                  display: block;
                                                  height: auto;
                                                  border: 0;
                                                "
                                            /></a>
                                          </td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- End -->
    </body>
  </html>
  
  `;
};

export default getEmailContentWithVerifyLink;
