// Edit these values before publishing. No analytics or external messaging is enabled until configured.
const BOMIGO_CONFIG = {whatsappNumber: '8619824497621', ga4MeasurementId: ''};
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
const wa=document.querySelector('[data-whatsapp]');if(wa){if(BOMIGO_CONFIG.whatsappNumber){wa.href='https://wa.me/'+BOMIGO_CONFIG.whatsappNumber.replace(/\D/g,'')+'?text='+encodeURIComponent('Hello Bomigo, I would like to inquire about wholesale heating mats.');}else{wa.hidden=true;}}
if(BOMIGO_CONFIG.ga4MeasurementId && /^G-[A-Z0-9]+$/.test(BOMIGO_CONFIG.ga4MeasurementId)){const s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(BOMIGO_CONFIG.ga4MeasurementId);document.head.appendChild(s);window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config',BOMIGO_CONFIG.ga4MeasurementId);}
const form=document.querySelector('[data-inquiry-form]');if(form){form.addEventListener('submit',e=>{if(form.action.includes('YOUR_FORM_ID')){e.preventDefault();alert('Please configure your Formspree form ID in contact.html before publishing.');}});}

// Keep mobile navigation usable with keyboard and touch.
if(toggle&&nav){nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}});}
// Prefill the quote form from product cards or sample links.
if(form){const params=new URLSearchParams(location.search);const product=params.get('product');const topic=params.get('topic');if(product&&form.elements.product){form.elements.product.value=product;const interest=form.elements.inquiry_type;if(interest)interest.value='Wholesale quotation';}if(topic&&form.elements.inquiry_type){const options=[...form.elements.inquiry_type.options].map(o=>o.value);if(options.includes(topic))form.elements.inquiry_type.value=topic;}}
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
