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
                    <p>
                        Подробно разбираем ваш рацион, образ жизни и цели. Вы получаете персональные рекомендации,
                        список полезных привычек и пошаговый план. Подходит для первого знакомства и переоценки питания.
                    </p>
                    <p><strong>Продолжительность:</strong> 60 минут</p>
                    <p><strong>Стоимость:</strong> 3 000 ₽</p>
                </li>

                <li class="services__card">
                    <h3 class="services__cardTitle">🌿 Программа «Детокс мягко»</h3>
                    <p>
                        7-дневная программа для лёгкости, снижения отёков и восстановления пищевых привычек.
                        Без крайностей и голодовок — только сбалансированное питание, поддержка ЖКТ и лёгкость.
                    </p>
                    <p><strong>Формат:</strong> PDF-гайд + чат-поддержка</p>
                    <p><strong>Стоимость:</strong> 2 500 ₽</p>
                </li>

                <li class="services__card">
                    <h3 class="services__cardTitle">🥗 Персональный план питания на месяц</h3>
                    <p>
                        Учитывает ваш график, вкусы, цели и уровень активности. Рацион составлен так, чтобы было вкусно, сытно и несложно готовить.
                        Включает покупки, рецепты и подсказки по привычкам.
                    </p>
                    <p><strong>Формат:</strong> PDF + голосовая обратная связь</p>
                    <p><strong>Стоимость:</strong> от 4 500 ₽</p>
                </li>

                <li class="services__card">
                    <h3 class="services__cardTitle">⚖️ Сопровождение при снижении веса</h3>
                    <p>
                        Работаем в течение месяца: корректируем рацион, отслеживаем динамику, прорабатываем пищевое поведение.
                        Я с вами на связи, поддерживаю, отвечаю на вопросы и адаптирую план по ходу процесса.
                    </p>
                    <p><strong>Формат:</strong> 4 недели поддержки (чаты + мини-созвоны)</p>
                    <p><strong>Стоимость:</strong> 8 000 ₽</p>
                </li>

                <li class="services__card">
                    <h3 class="services__cardTitle">💻 Онлайн-курс или вебинары</h3>
                    <p>
                        Вдохновляющие и информативные встречи о питании, мотивации, балансе и заботе о себе.
                        Подходит тем, кто хочет разобраться в теме питания, но не готов к индивидуальной работе.
                    </p>
                    <p><strong>Формат:</strong> Zoom / записи</p>
                    <p><strong>Стоимость:</strong> уточняйте по запросу</p>
                </li>
            </ul>    
        </FrameSection>
        </section>
    )
}