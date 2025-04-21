import './Services.css'
import Heading from '../UI-Kit/Heading/Heading'
import FrameSection from '../UI-Kit/Frame/FrameSection'

export default function Services() {
    return (
        <section className="services__wrapper">
        <FrameSection id="services">
            <Heading>Услуги и программы</Heading>

            <ul class="services__cardWrapper">
                <li class="services__card">
                    <h3 class="services__cardTitle">🧭 Индивидуальная консультация</h3>
                    <p class="services__cardText">
                        Подробно разбираем ваш рацион, образ жизни и цели. Вы получаете персональные рекомендации,
                        список полезных привычек и пошаговый план. Подходит для первого знакомства и переоценки питания.
                    </p>
                    <p class="services__cardText"><strong>Продолжительность:</strong> 60 минут</p>
                    <p class="services__cardText"><strong>Стоимость:</strong> 3 000 ₽</p>
                </li>

                <li class="services__card">
                    <h3 class="services__cardTitle">🌿 Программа «Детокс мягко»</h3>
                    <p class="services__cardText">
                        7-дневная программа для лёгкости, снижения отёков и восстановления пищевых привычек.
                        Без крайностей и голодовок — только сбалансированное питание, поддержка ЖКТ и лёгкость.
                    </p>
                    <p class="services__cardText"><strong>Формат:</strong> PDF-гайд + чат-поддержка</p>
                    <p class="services__cardText"><strong>Стоимость:</strong> 2 500 ₽</p>
                </li>

                <li class="services__card">
                    <h3 class="services__cardTitle">🥗 Персональный план питания на месяц</h3>
                    <p class="services__cardText">
                        Учитывает ваш график, вкусы, цели и уровень активности. Рацион составлен так, чтобы было вкусно, сытно и несложно готовить.
                        Включает покупки, рецепты и подсказки по привычкам.
                    </p>
                    <p class="services__cardText"><strong>Формат:</strong> PDF + голосовая обратная связь</p>
                    <p class="services__cardText"><strong>Стоимость:</strong> от 4 500 ₽</p>
                </li>

                <li class="services__card">
                    <h3 class="services__cardTitle">⚖️ Сопровождение при снижении веса</h3>
                    <p class="services__cardText">
                        Работаем в течение месяца: корректируем рацион, отслеживаем динамику, прорабатываем пищевое поведение.
                        Я с вами на связи, поддерживаю, отвечаю на вопросы и адаптирую план по ходу процесса.
                    </p>
                    <p class="services__cardText"><strong>Формат:</strong> 4 недели поддержки (чаты + мини-созвоны)</p>
                    <p class="services__cardText"><strong>Стоимость:</strong> 8 000 ₽</p>
                </li>

                <li class="services__card">
                    <h3 class="services__cardTitle">💻 Онлайн-курс или вебинары</h3>
                    <p class="services__cardText">
                        Вдохновляющие и информативные встречи о питании, мотивации, балансе и заботе о себе.
                        Подходит тем, кто хочет разобраться в теме питания, но не готов к индивидуальной работе.
                    </p>
                    <p class="services__cardText"><strong>Формат:</strong> Zoom / записи</p>
                    <p class="services__cardText"><strong>Стоимость:</strong> уточняйте по запросу</p>
                </li>
            </ul>    
        </FrameSection>
        </section>
    )
}