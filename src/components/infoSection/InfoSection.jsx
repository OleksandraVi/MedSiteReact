import './info.css'

export default function InfoSection() {
    const publicImg = process.env.PUBLIC_URL;
    return (
        <section class="info">
            <div class="info-inner container">
                <div class="info-left">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, nam magnam in harum neque ipsa
                        dolorem,
                        at illum, suscipit iste eius. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolorum
                        nam
                        amet ipsam commodi molestias deleniti eius cupiditate ipsa maxime alias quas aliquid tempora velit,
                        inventore
                        iste minima sed corporis?Voluptas illum quod quam excepturi, temporibus expedita minus suscipit!</p>
                    <div class="info-left-img">
                        <img src={publicImg + "images/doctor.png"} alt="doctor" />
                    </div>
                </div>
                <div class="info-right">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sint eveniet sapiente officiis,
                        architecto quo aperiam ipsam dolore itaque. Illo fugiat consequuntur ad exercitationem? Asperiores cumque
                        eos
                        molestias repellendus provident.</p>
                </div>
            </div>
        </section>
    )
}