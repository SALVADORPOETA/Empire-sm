import React from 'react'
import AboutCard from './AboutCard'
import rome1 from '../assets/rome1.png'
import rome2 from '../assets/rome2.jpg'
import rome3 from '../assets/rome3.jpg'
import rome4 from '../assets/rome4.png'
import rome5 from '../assets/rome5.png'
import rome6 from '../assets/rome6.jpg'
import rome7 from '../assets/rome7.svg'
import rome8 from '../assets/rome8.jpg'
import rome9 from '../assets/rome9.jpg'
import rome10 from '../assets/rome10.png'
import rome11 from '../assets/rome11.jpg'
import rome12 from '../assets/rome12.png'
import rome13 from '../assets/rome13.jpg'
import rome14 from '../assets/rome14.svg'
import rome15 from '../assets/rome15.png'
import rome16 from '../assets/rome16.png'
import rome17 from '../assets/rome17.png'
import rome18 from '../assets/rome18.png'
import rome19 from '../assets/rome19.png'
import rome20 from '../assets/rome20.jpg'
import rome21 from '../assets/rome21.jpg'
import rome22 from '../assets/rome22.jpg'
import rome23 from '../assets/rome23.jpg'
import rome24 from '../assets/rome24.png'
import rome25 from '../assets/rome25.jpg'
import RomanCard from './RomanCard'
import rome26 from '../assets/rome26.png'

const CardContainer = () => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5'>
        {/* Card */}
        <RomanCard 
            link={'https://en.wikipedia.org/wiki/Roman_Empire'}
            image={<img src={rome26} alt='rome26' style={{width: '240px', borderRadius: '30px'}} />}
            heading="Roman Empire (27 BC - AD 1453)"
            text="The Roman Empire is generally understood to mean the period and territory 
                ruled by the Romans following Octavian's assumption of sole rule under the Principate in 27 BC, 
                the post-Republican state of ancient Rome. It included territories in Europe, 
                North Africa, and Western Asia and was ruled by emperors. 
                The fall of the Western Roman Empire in 476 AD conventionally marks the end of classical 
                antiquity and the beginning of the Middle Ages. 
                The vexillum of the Roman Empire was a red banner with the letters SPQR 
                (Senatus PopulusQue Romanus)
                in Gold surrounded by a gold wreath hung on a military standard topped by a 
                Roman eagle or an image of the goddess Victoria made of silver or bronze"
        />
        <AboutCard 
            link={'https://en.wikipedia.org/wiki/Julio-Claudian_dynasty'}
            image={<img src={rome1} alt='rome1' style={{ width: '120px' }} />}
            heading='Julio-Claudian dynasty (27 BC – AD 68)' 
            text='The Julio-Claudian dynasty comprised the first five Roman emperors: Augustus, Tiberius, Caligula, Claudius, and Nero. 
                This line of emperors ruled the Roman Empire, from its formation (under Augustus, in 27 BC) until the last of the line, Emperor Nero, committed suicide (in AD 68).
                The name Julio-Claudian is a historiographical term, deriving from the two families composing the imperial dynasty: the Julii Caesares and Claudii Nerones.' 
        />
        <AboutCard 
            link={'https://en.wikipedia.org/wiki/Year_of_the_Four_Emperors'}
            image={<img src={rome2} alt='rome2' style={{ width: '120px', borderRadius: '30px' }} />}
            heading='Year of the Four Emperors (68–69)'
            text='The Year of the Four Emperors, AD 69, was the first civil war of the Roman Empire, 
                during which four emperors ruled in succession: Galba, Otho, Vitellius, and Vespasian. 
                It is considered an important interval, marking the transition from the Julio-Claudians, 
                the first imperial dynasty, to the Flavian dynasty. 
                The period witnessed several rebellions and claimants, 
                with shifting allegiances and widespread turmoil in Rome and the provinces.'    
        />
        <AboutCard 
            link={'https://en.wikipedia.org/wiki/Flavian_dynasty'}
            image={<img src={rome3} alt='rome3' style={{ width: '120px', borderRadius: '30px' }} />}
            heading='Flavian dynasty (69–96)'
            text='The Flavian dynasty, lasting from AD 69 to 96, was the second dynastic line 
                of emperors to rule the Roman Empire following the Julio-Claudians, 
                encompassing the reigns of Vespasian and his two sons, Titus and Domitian. 
                The Flavians rose to power during the civil war of AD 69, 
                known as the Year of the Four Emperors; after Galba and Otho died in quick succession, 
                Vitellius became emperor in mid 69. '    
        />
        <AboutCard 
            link={'https://en.wikipedia.org/wiki/Nerva%E2%80%93Antonine_dynasty'}
            image={<img src={rome4} alt='rome4' style={{ width: '120px', borderRadius: '30px' }} />}
            heading='Nerva–Antonine dynasty (96–192)'
            text='The Nerva–Antonine dynasty comprised seven Roman emperors who ruled from AD 96 to 192: 
                Nerva (96–98), Trajan (98–117), Hadrian (117–138), Antoninus Pius (138–161), 
                Marcus Aurelius (161–180), Lucius Verus (161–169), and Commodus (177–192). 
                The first five of these are commonly known as the "Five Good Emperors".'    
        />
        <AboutCard 
            link={'https://simple.wikipedia.org/wiki/Year_of_the_Five_Emperors'}
            image={<img src={rome5} alt='rome5' style={{ width: '120px', borderRadius: '30px' }} />}
            heading='Year of the Five Emperors (193)'
            text='The Year of the Five Emperors was AD 193, 
                in which five men claimed the title of Roman emperor: 
                Pertinax, Didius Julianus, Pescennius Niger, Clodius Albinus, and Septimius Severus. 
                This year started a period of civil war when multiple rulers 
                vied for the chance to become emperor.'    
        />
        <AboutCard 
            link={'https://en.wikipedia.org/wiki/Severan_dynasty'}
            image={<img src={rome6} alt='rome6' style={{ width: '120px', borderRadius: '30px' }} />}
            heading='Severan dynasty (193–235)'
            text='The Severan dynasty, sometimes called the Septimian dynasty, 
                was an Ancient Roman imperial dynasty that ruled the Roman Empire between 193 and 235, 
                during the Roman imperial period. 
                The dynasty was founded by the emperor Septimius Severus (r. 193–211), 
                who rose to power after the Year of the Five Emperors as the victor of the civil war of 193–197, 
                and his wife, Julia Domna.'    
        />
        <AboutCard 
            link={'https://en.wikipedia.org/wiki/Crisis_of_the_Third_Century'}
            image={<img src={rome7} alt='rome7' style={{ width: '120px', borderRadius: '30px' }} />}
            heading='Crisis of the Third Century (235–285)'
            text='The Crisis of the Third Century, also known as the Military Anarchy 
                or the Imperial Crisis (235–285), 
                was a period in Roman history during which the Roman Empire had nearly collapsed 
                under the combined pressure of repeated foreign invasions, civil wars and economic disintegration. 
                At the height of the crisis, the Roman state had split into three distinct and competing polities.'    
        />
        <AboutCard 
            link={'https://en.wikipedia.org/wiki/Tetrarchy'}
            image={<img src={rome8} alt='rome8' style={{ width: '120px', borderRadius: '30px' }} />}
            heading='Tetrarchy (284–324)'
            text='The Tetrarchy was the system instituted by Roman emperor Diocletian in 293 AD 
                to govern the ancient Roman Empire by dividing it between two emperors, 
                the augusti, and their junior colleagues and designated successors, the caesares.'    
        />
        <AboutCard 
            link={'https://en.wikipedia.org/wiki/Constantinian_dynasty'}
            image={<img src={rome9} alt='rome9' style={{ width: '120px', borderRadius: '30px' }} />}
            heading='Constantinian dynasty (306–363)'
            text='The Constantinian dynasty is an informal name for the ruling family of the Roman Empire 
                from Constantius Chlorus (died 306) to the death of Julian in 363. 
                It is named after its most famous member, Constantine the Great, 
                who became the sole ruler of the empire in 324. 
                The dynasty is also called Neo-Flavian because every Constantinian emperor bore the name Flavius, 
                similarly to the rulers of the first Flavian dynasty in the 1st century.'    
        />
        <AboutCard 
            link={'https://en.wikipedia.org/wiki/Valentinian_dynasty'}
            image={<img src={rome10} alt='rome10' style={{ width: '120px', borderRadius: '30px' }} />}
            heading='Valentinian dynasty (364–392)'
            text='The Valentinian dynasty was a ruling house of five generations of dynasts, 
                including five Roman emperors during late antiquity, 
                lasting nearly a hundred years from the mid fourth to the mid fifth century. 
                They succeeded the Constantinian dynasty (r. 306–363) and reigned over the Roman Empire 
                from 364 to 392 and from 425 to 455, with an interregnum (392–423), 
                during which the Theodosian dynasty ruled and eventually succeeded them. 
                The Theodosians, who intermarried into the Valentinian house, ruled concurrently in the east after 379.'    
        />
        <AboutCard 
            link={'https://en.wikipedia.org/wiki/Theodosian_dynasty'}
            image={<img src={rome11} alt='rome11' style={{ width: '120px', borderRadius: '30px' }} />}
            heading='Theodosian dynasty (379–457)'
            text="The Theodosian dynasty was a Roman imperial family that produced five Roman emperors 
                during Late Antiquity, reigning over the Roman Empire from 379 to 457. 
                The dynasty's patriarch was Theodosius the Elder, 
                whose son Theodosius the Great was made Roman emperor in 379. 
                Theodosius's two sons both became emperors, while his daughter married Constantius III, 
                producing a daughter that became an empress and a son also became emperor."    
        />
        <AboutCard 
            link={'https://en.wikipedia.org/wiki/Fall_of_the_Western_Roman_Empire'}
            image={<img src={rome12} alt='rome12' style={{ width: '120px', borderRadius: '30px' }} />}
            heading='Last western emperors (455–476)'
            text='The fall of the Western Roman Empire, also called the fall of the Roman Empire or the fall of Rome, 
                was the loss of central political control in the Western Roman Empire, 
                a process in which the Empire failed to enforce its rule, 
                and its vast territory was divided between several successor polities.'    
        />
        <AboutCard 
            link={'https://en.wikipedia.org/wiki/Leonid_dynasty'}
            image={<img src={rome13} alt='rome13' style={{ width: '120px', borderRadius: '30px' }} />}
            heading='Leonid dynasty (457–518)'
            text="The Leonid dynasty or Thracian dynasty produced six Roman emperors during Late Antiquity, 
                reigning over the Roman Empire from 457 to 518. The dynasty's patriarch was Leo I, 
                who was made Roman emperor in 457. Leo's daughter Ariadne became empress and mother to an emperor, 
                and her two husbands were themselves each made emperor in turn."    
        />
        <AboutCard 
            link={'https://en.wikipedia.org/wiki/Byzantine_Empire_under_the_Justinian_dynasty'}
            image={<img src={rome14} alt='rome14' style={{ width: '120px', borderRadius: '30px' }} />}
            heading='Justinian dynasty (518–602)'
            text='The Byzantine Empire underwent a golden age under the Justinian dynasty, 
                beginning in 518 AD with the accession of Justin I. 
                Under the Justinian dynasty, particularly the reign of Justinian I, 
                the empire reached its greatest territorial extent since the fall of its Western counterpart, 
                reincorporating North Africa, southern Illyria, southern Spain, and Italy into the empire. 
                The Justinian dynasty ended in 602 with the deposition of Maurice and the ascension of his successor, 
                Phocas.'    
        />
        <AboutCard 
            link={'https://en.wikipedia.org/wiki/Byzantine_Empire_under_the_Heraclian_dynasty'}
            image={<img src={rome15} alt='rome15' style={{ width: '120px', borderRadius: '30px' }} />}
            heading='Heraclian dynasty (610–695)'
            text="The Byzantine Empire was ruled by emperors of the dynasty of Heraclius between 610 and 711. 
                The Heraclians presided over a period of cataclysmic events that were a watershed in the history 
                of the Empire and the world. Heraclius, the founder of his dynasty, 
                was of Armenian and Cappadocian (Greek) origin. 
                At the beginning of the dynasty, the Empire's culture was still essentially Ancient Roman, 
                dominating the Mediterranean and harbouring a prosperous Late Antique urban civilization. "    
        />
        <AboutCard 
            link={'https://en.wikipedia.org/wiki/Twenty_Years%27_Anarchy'}
            image={<img src={rome16} alt='rome16' style={{ width: '120px', borderRadius: '30px' }} />}
            heading="Twenty Years' Anarchy (695–717)"
            text="The Twenty Years' Anarchy is a historiographic term used by some modern scholars 
                for the period of acute internal instability in the Byzantine Empire marked by the rapid succession 
                of several emperors to the throne between the first deposition of Justinian II in 695 
                and the ascent of Leo III the Isaurian to the throne in 717, 
                marking the beginning of the Isaurian dynasty."    
        />
        <AboutCard 
            link={'https://en.wikipedia.org/wiki/Byzantine_Empire_under_the_Isaurian_dynasty'}
            image={<img src={rome17} alt='rome17' style={{ width: '120px', borderRadius: '30px' }} />}
            heading="Isaurian (Syrian) dynasty (717–802)"
            text="The Byzantine Empire was ruled by the Isaurian dynasty (or Syrian dynasty) from 717 to 802. 
                The Isaurian emperors were successful in defending and consolidating the empire against the 
                caliphates after the onslaught of the early Muslim conquests, 
                but were less successful in Europe, where they suffered setbacks against the Bulgars, 
                had to give up the Exarchate of Ravenna, 
                and lost influence over Italy and the papacy to the growing power of the Franks."    
        />
        <AboutCard 
            link={'https://en.wikipedia.org/wiki/Byzantine_Empire_under_the_Nikephorian_dynasty'}
            image={<img src={rome18} alt='rome18' style={{ width: '120px', borderRadius: '30px' }} />}
            heading="Nikephorian dynasty (802–813)"
            text="The Byzantine Empire under the Nikephorian dynasty began following the deposition 
                of the Byzantine empress Irene of Athens, the throne of the Byzantine Empire passed to 
                a relatively short-lived dynasty, the Nikephorian dynasty, named after its founder, Nikephoros I. 
                The empire was in a weaker and more precarious position than it had been for a long time and 
                its finances were problematic."    
        />
        <AboutCard 
            link={'https://en.wikipedia.org/wiki/Byzantine_Empire_under_the_Amorian_dynasty'}
            image={<img src={rome19} alt='rome19' style={{ width: '120px', borderRadius: '30px' }} />}
            heading="Amorian dynasty (820–867)"
            text="The Byzantine Empire under the Amorian dynasty (or Phrygian dynasty) ruled from 820 to 867. 
                The Amorian dynasty continued the policy of restored iconoclasm (the 'Second Iconoclasm') 
                started by the previous non-dynastic emperor Leo V in 813, 
                until its abolition by Empress Theodora with the help of Patriarch Methodios in 842. 
                The continued iconoclasm further worsened relations between the East and the West, 
                which were already bad following the papal coronations of a rival line of 'Roman Emperors' 
                beginning with Charlemagne in 800. Relations worsened even further during the so-called Photian Schism, 
                when Pope Nicholas I challenged Photios' elevation to the patriarchate."    
        />
        <AboutCard 
            link={'https://en.wikipedia.org/wiki/Macedonian_dynasty'}
            image={<img src={rome20} alt='rome20' style={{ width: '120px', borderRadius: '30px' }} />}
            heading="Macedonian dynasty (867–1056)"
            text="The Macedonian dynasty (Greek: Μακεδονική Δυναστεία) ruled the Byzantine Empire from 867 to 1056, 
                following the Amorian dynasty. During this period, 
                the Byzantine state reached its greatest extent since the Early Muslim conquests, 
                and the Macedonian Renaissance in letters and arts began. 
                The dynasty was named after its founder, Basil I the Macedonian who came from the theme of Macedonia."    
        />
        <AboutCard 
            link={'https://en.wikipedia.org/wiki/Doukas'}
            image={<img src={rome21} alt='rome21' style={{ width: '120px', borderRadius: '30px' }} />}
            heading="Doukas dynasty (1059–1078)"
            text="The House of Doukas, 
                was a Byzantine Greek noble family, whose branches provided several notable generals and rulers to the Byzantine Empire 
                in the 9th–11th centuries. A maternally-descended line, the Komnenodoukai, 
                founded the Despotate of Epirus in the 13th century, with another branch ruling over Thessaly."    
        />
        <AboutCard 
            link={'https://en.wikipedia.org/wiki/Komnenos'}
            image={<img src={rome22} alt='rome22' style={{ width: '120px', borderRadius: '30px' }} />}
            heading="Komnenos dynasty (1081–1185)"
            text="The House of Komnenos
                was a Byzantine Greek noble family who ruled the Byzantine Empire in the 11th and 12th centuries. 
                The first reigning member, Isaac I Komnenos, ruled from 1057 to 1059. 
                The family returned to power under Alexios I Komnenos in 1081 who established their rule 
                for the following 104 years until it ended with Andronikos I Komnenos in 1185. "    
        />
        <AboutCard 
            link={'https://en.wikipedia.org/wiki/Angelos'}
            image={<img src={rome23} alt='rome23' style={{ width: '120px', borderRadius: '30px' }} />}
            heading="Angelos dynasty (1185–1204)"
            text="The House of Angelos, was a Byzantine Greek noble family that produced several Emperors 
                and other prominent nobles during the middle and late Byzantine Empire. 
                The family rose to prominence through the marriage of its founder, 
                Constantine Angelos, with Theodora Komnene, the youngest daughter of Emperor Alexios I Komnenos."    
        />
        <AboutCard 
            link={'https://en.wikipedia.org/wiki/Laskaris'}
            image={<img src={rome24} alt='rome24' style={{ width: '120px', borderRadius: '30px' }} />}
            heading="Laskaris dynasty (1205–1261)"
            text="The House of Laskaris, was a Byzantine Greek noble family 
                which rose to prominence during the late Byzantine period. 
                The members of the family formed the ruling dynasty of the Empire of Nicaea, 
                a Byzantine rump state that existed from the 1204 sack of Constantinople 
                by the Fourth Crusade until the restoration of the Empire under the Palaeologan dynasty in 1261."
        />    
        <AboutCard 
            link={'https://en.wikipedia.org/wiki/Palaiologos'}
            image={<img src={rome25} alt='rome25' style={{ width: '120px', borderRadius: '30px' }} />}
            heading="Palaiologos dynasty (1259–1453)"
            text="The House of Palaiologos, was a Byzantine Greek noble family that rose to power 
            and produced the last and longest-ruling dynasty in the history of the Byzantine Empire. 
            Their rule as Emperors and Autocrats of the Romans lasted almost two hundred years, 
            from 1259 to the Fall of Constantinople in 1453." 
        />
    </div>
)
}

export default CardContainer