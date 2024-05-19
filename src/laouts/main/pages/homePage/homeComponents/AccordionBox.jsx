import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../home.scss";
export default function AccordionBox() {
  return (
    <div className="accordion">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          ویژگی‌های سبک ادبیات روسی کدامند؟
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>
              به دلیل سختی زبان روسی، ترجمه و انتقال مفاهیم این زبان به فارسی با
              دشواری همراه است و بعضاً نتیجه حاصله، سبب دوری مخاطب از مطالعه این
              آثار می‌شود.
            </li>
            <li>آثار مشهور روسیه، مفاهیم سنگین و دشواری دارند.</li>
            <li>
              وجود شخصیت‌های متفاوت با تعداد زیاد در داستان و اسامی طولانی
              کاراکترها.
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          چرا ادبیات فرانسه مهم است؟
        </AccordionSummary>
        <AccordionDetails>
          ادبیات برای مردم فرانسه اهمیت عمیقی دارد و نقش مهمی در احساس هویت آنها
          ایفا می‌کند. از سال 2006، ادبيات فرانسوی بيشتر از رمان‌نويس‌ها، شاعران
          و مقاله‌نويس‌های هر كشور ديگری جايزه نوبل ادبيات را دريافت كرده‌است.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          تفاوت اساسی ادبیات نمایشی با ادبیات داستانی
        </AccordionSummary>
        <AccordionDetails>
          تفاوت اساسی ادبیات نمایشی با ادبیات داستانی یکی از جذابترین و
          اسرارآمیزترین خصوصیات نمایش این است که غالباً تماشاگران حاضر در یک
          سالن، نوعی واکنش جمعی به رویدادها دارند. این امر هم برای بازیگران روی
          صحنه و هم برای خود تماشاگران، محسوس و آشکار است. انبوه تماشاگران از
          منفرد و منزوی خارج شده و به خودآگاهی جمعی تبدیل می‌شوند. در یک صحنه
          خنده‌دار معمولاً همه‌ی حضار با هم میخندند. چنین واکنشی را می‌توان در
          اجرای یک نمایش ترسناک هم دید. همه‌ی تماشاگران هنگام تماشای برخی
          صحنه‌ها جیغ می‌کشند. خواندن رمان و داستان برای یک خواننده معمولاً
          واکنش‌های احساسی بیرونی در برندارد، اما خواندن نمایشنامه این مزیت را
          دارد که خواننده می‌تواند صحنه‌ی تئاتر را تجسم کرده و همذات‌پنداری
          بیشتری با متن داشته باشد.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          چگونه کتاب‌های آلن دوباتن را بخوانیم؟
        </AccordionSummary>
        <AccordionDetails>
          کتاب‌های آلن دوباتن معمولا ترتیب خاصی نداشته و هر کدام از آنها به
          موضوع خاصی می‌پردازند، بنابراین می‌توانید یکی را انتخاب کرده و شروع
          کنید. بهتر است با موضوع مورد علاقه‌تان شروع کنید. اگر به کتاب‌های روان
          شناسی علاقه مندید، کتاب‌های مدرسه زندگی شروع خوبی هستند. کتاب‌های
          جستارهایی در باب عشق و در سیر عشق به پیچیدگی‌های روابط عاشقانه
          می‌پردازند. پس اگر دوست دارید درباره رابطه و عشق بدانید یا به دنبال
          پاسخ سوال‌های عاشقانه خود هستید، این دو کتاب گزینه‌های خوبی برای
          مطالعه هستند. عاشقان سفر هم آلن دوباتن را با کتاب هنر سیر و سفر
          می‌شناسند. حتی بسیاری از آنها با آلن دوباتن آشنایی نداشته و کتاب دیگری
          از او نخوانده‌اند اما با هنر سیر و سفر او آشنا هستند.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          ادبیات چگونه بر انقلاب فرانسه تأثیر گذاشت؟
        </AccordionSummary>
        <AccordionDetails>
          فلسفه جدید حقوق همه انسانها هم در سیاست و هم در ادبیات بیان شد. این به
          “لیبرالیسم در ادبیات” منجر شد. لیبرالیسم سیاسی انقلاب فرانسه الهام‌بخش
          آزادی، فردیت و رد قوانین تجویز شده در ادبیات رمانتیک بود.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
