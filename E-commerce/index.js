const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navder');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
} 

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
} 

var product = [{
    id: 1,
    img: src="Photo-shi/เสื้อฮู้ดพิมพ์ลาย LA to the World.png",
    name: 'Adidas',
    price: 1500,
    description: 'เสื้อฮู้ดอาดิดาสตัวนี้พร้อมให้คุณโบกธงแสดงพลังเพื่อลอสแอนเจลิส กราฟิกแนวแอบสแตรกชวนให้นึกถึงสไตล์และจิตวิญญาณของบาสเกตบอลท้องถิ่น ตัวเสื้อตัดเย็บจากผ้าเฟรนช์เทอร์รีย์ที่นุ่มเป็นพิเศษเพื่อกักเก็บความสบายไว้กับตัวคุณ ทรงคลาสสิกและดีไซน์แบบสวมช่วยให้เสื้อตัวนี้สวมคลุมและถอดออกง่าย เมื่อเลือกใช้วิธีรีไซเคิล เราสามารถนำวัสดุเดิมที่ผลิตขึ้นแล้วกลับมาใช้ใหม่ได้ ซึ่งจะช่วยลดขยะ การเลือกใช้วัสดุหมุนเวียนจะช่วยให้เราลดการพึ่งพาทรัพยากรที่มีอย่างจำกัด ผลิตภัณฑ์ของเราที่ผลิตจากวัสดุรีไซเคิลและวัสดุหมุนเวียนมีส่วนประกอบของวัสดุเหล่านี้อย่างน้อย 70% เสื้อฮู้ดตัวนี้รังสรรค์ขึ้นด้วย UNITEFIT ซึ่งเป็นรูปแบบการวัดขนาดเสื้อผ้าที่ใช้ออกแบบทรงให้สวมได้ทุกเพศ และพัฒนาขึ้นโดยคำนึงถึงความหลากหลายทั้งเรื่องขนาด เพศ และรูปร่าง'
}, {}, {}];

$(document).ready(() => {
    var html = '';
    for (let i = 0; i < product.length; i++) {
        html += `<div class="pro-container ${product[i].type}"> 
            <div class="pro">
                <img src="${product[i].img}" alt="" >
                <div class="des ${product[i].name}">
                    <span>Adidas</span>
                    <h5>เสื้อฮู้ดพิมพ์ลาย LA to the World</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>1500 THB</h4>
                </div>
                <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
            </div>`;
    }
    $("#productlist").html(html);
})

