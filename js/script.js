// Data store for products (prices in INR)
const products = [
    // Microphones category (15 products)
    { id: 1, category: 'Microphones', name: 'Rode NT1A', price: 19007, rating: 4.5, img: 'images/products/rode-nt1a.png', desc: 'Large-diaphragm condenser microphone.', specs: ['24-bit recording', 'Cardioid pattern', 'Flat frequency response'] },
    { id: 2, category: 'Microphones', name: 'Audio Technica AT2020', price: 8217, rating: 4, img: 'images/products/at2020.png', desc: 'Affordable condenser mic for home studio.', specs: ['20-20kHz', 'Cardioid', 'Low noise'] },
    { id: 3, category: 'Microphones', name: 'Shure SM7B', price: 33117, rating: 4.8, img: 'images/products/sm7b.png', desc: 'Industry standard broadcast microphone.', specs: ['Cardioid', 'Flat response', 'Air suspension'] },
    { id: 4, category: 'Microphones', name: 'Blue Yeti', price: 10707, rating: 4.2, img: 'images/products/blue-yeti.png', desc: 'USB condenser mic with multiple patterns.', specs: ['Tri-capsule array', '4 pattern modes', 'Mute button'] },
    { id: 5, category: 'Microphones', name: 'AKG P120', price: 6557, rating: 3.9, img: 'images/products/akg-p120.png', desc: 'Entry-level condenser mic.', specs: ['20-20kHz', 'Cardioid', 'Low self-noise'] },
    { id: 6, category: 'Microphones', name: 'Behringer C1', price: 4067, rating: 3.5, img: 'images/products/behringer-c1.png', desc: 'Budget condenser microphone.', specs: ['Cardioid', 'Low-cut filter', 'Metal body'] },
    { id: 7, category: 'Microphones', name: 'Samson C01', price: 4897, rating: 3.7, img: 'images/products/samson-c1.png', desc: 'Affordable studio mic.', specs: ['Cardioid', 'Wide frequency', 'Shock mount included'] },
    { id: 8, category: 'Microphones', name: 'Maono AU-A04', price: 3237, rating: 3.3, img: 'images/products/maono-au-a04.png', desc: 'USB condenser microphone kit.', specs: ['Plug & play', 'Cardioid', 'Pop filter'] },
    { id: 9, category: 'Microphones', name: 'Fifine K669', price: 2407, rating: 3.0, img: 'images/products/fifine-k669.png', desc: 'USB microphone with headphone jack.', specs: ['Cardioid', 'Volume control', 'Metal construction'] },
    { id: 10, category: 'Microphones', name: 'Rode NT USB', price: 14027, rating: 4.1, img: 'images/products/rode-nt-usb.png', desc: 'USB condenser microphone.', specs: ['USB output', 'Zero-latency', 'Headphone jack'] },
    { id: 11, category: 'Microphones', name: 'Shure MV7', price: 24647, rating: 4.4, img: 'images/products/shure-mv7.png', desc: 'Dynamic XLR/USB microphone.', specs: ['Dynamic capsule', 'XLR/USB', 'Built-in preamp'] },
    { id: 12, category: 'Microphones', name: 'AKG C214', price: 28797, rating: 4.6, img: 'images/products/akg-c214.png', desc: 'Large-diaphragm condenser microphone.', specs: ['1-inch capsule', 'Cardioid', 'Switchable pad'] },
    { id: 13, category: 'Microphones', name: 'Neumann TLM 102', price: 57497, rating: 4.8, img: 'images/products/neumann-tlm102.png', desc: 'Studio condenser microphone.', specs: ['Cardioid', 'Transformerless', 'Large diaphragm'] },
    { id: 14, category: 'Microphones', name: 'Rode Procaster', price: 20567, rating: 4.5, img: 'images/products/rode-procaster.png', desc: 'Dynamic broadcast microphone.', specs: ['Dynamic capsule', 'Cardioid', 'Internal pop filter'] },
    { id: 15, category: 'Microphones', name: 'Lewitt LCT 440', price: 32847, rating: 4.7, img: 'images/products/lewitt-lct440.png', desc: 'Pure studio condenser microphone.', specs: ['1-inch capsule', 'Cardioid', 'Pure tube emulation'] },
    // MIDI Keyboards category (15 products)
    { id: 16, category: 'MIDI Keyboards', name: 'Akai MPK Mini', price: 9877, rating: 4.4, img: 'images/products/akai-mpk-mini.png', desc: 'Portable 25-key pad controller.', specs: ['25 keys', '8 pads', 'Arpeggiator'] },
    { id: 17, category: 'MIDI Keyboards', name: 'Novation Launchkey', price: 13197, rating: 4.2, img: 'images/products/novation-launchkey.png', desc: 'Integration with Ableton Live.', specs: ['25/49/61 keys', 'Pads', 'Control knobs'] },
    { id: 18, category: 'MIDI Keyboards', name: 'Arturia MiniLab', price: 8217, rating: 4.0, img: 'images/products/arturia-minilab.png', desc: 'Compact controller with software bundle.', specs: ['25 keys', '16 encoders', 'Pads'] },
    { id: 19, category: 'MIDI Keyboards', name: 'M-Audio Oxygen', price: 10707, rating: 4.1, img: 'images/products/maudio-oxygen.png', desc: 'Keyboard with mapping to DAWs.', specs: ['25-61 keys', 'Knobs', 'Pitch/mod wheels'] },
    { id: 20, category: 'MIDI Keyboards', name: 'Nektar Impact', price: 8217, rating: 3.9, img: 'images/products/nektar-impact.png', desc: 'Lightweight controller.', specs: ['25/49/61 keys', 'Octave buttons', 'Pads'] },
    { id: 21, category: 'MIDI Keyboards', name: 'Alesis V49', price: 9877, rating: 4.0, img: 'images/products/alesis-v49.png', desc: '49-key controller with pads.', specs: ['49 keys', '8 pads', 'Arpeggiator'] },
    { id: 22, category: 'MIDI Keyboards', name: 'Native Instruments M32', price: 5727, rating: 3.8, img: 'images/products/ni-m32.png', desc: 'Portable 32-key controller.', specs: ['32 keys', 'Pads', 'Komplete Start'] },
    { id: 23, category: 'MIDI Keyboards', name: 'Korg MicroKey', price: 6557, rating: 3.7, img: 'images/products/korg-microkey.png', desc: 'Slim USB MIDI keyboard.', specs: ['25/37/49 keys', 'Lightweight', 'USB bus-powered'] },
    { id: 24, category: 'MIDI Keyboards', name: 'Akai LPK25', price: 4067, rating: 3.5, img: 'images/products/akai-lpk25.png', desc: 'Ultra-compact 25-key controller.', specs: ['25 keys', 'Sustain pedal', 'Battery powered'] },
    { id: 25, category: 'MIDI Keyboards', name: 'CME Xkey', price: 8217, rating: 3.9, img: 'images/products/cme-xkey.png', desc: 'Slim portable keyboard.', specs: ['25/37 keys', 'Aluminum body', 'Bluetooth option'] },
    { id: 26, category: 'MIDI Keyboards', name: 'Novation SL MKIII', price: 16437, rating: 4.3, img: 'images/products/novation-sl-mkiii.png', desc: 'Grid-based performance controller.', specs: ['8x8 grid', 'RGB pads', 'Ableton Live integration'] },
    { id: 27, category: 'MIDI Keyboards', name: 'Arturia KeyLab Essential', price: 11457, rating: 4.1, img: 'images/products/arturia-keylab-essential.png', desc: '49-key controller with DAW integration.', specs: ['49 keys', '8 encoders', '9 faders'] },
    { id: 28, category: 'MIDI Keyboards', name: 'M-Audio Keystation 49', price: 7387, rating: 3.9, img: 'images/products/maudio-keystation49.png', desc: 'USB MIDI keyboard controller.', specs: ['49 keys', 'Pitch/mod wheels', 'USB powered'] },
    { id: 29, category: 'MIDI Keyboards', name: 'Roland A-49', price: 9027, rating: 4.0, img: 'images/products/roland-a49.png', desc: '49-key MIDI keyboard.', specs: ['49 keys', 'Assignable controls', 'USB powered'] },
    { id: 30, category: 'MIDI Keyboards', name: 'Korg Keystage', price: 12367, rating: 4.2, img: 'images/products/korg-keystage.png', desc: '49-key controller with built-in sounds.', specs: ['49 keys', 'Built-in sounds', 'USB audio interface'] },
    // Studio Headphones category (15 products)
    { id: 31, category: 'Studio Headphones', name: 'Audio Technica M50x', price: 12367, rating: 4.6, img: 'images/products/ath-m50x.png', desc: 'Professional monitor headphones.', specs: ['Closed-back', '45mm drivers', 'Detachable cable'] },
    { id: 32, category: 'Studio Headphones', name: 'Sony MDR7506', price: 8217, rating: 4.3, img: 'images/products/sony-mdr7506.png', desc: 'Classic studio headphones used worldwide.', specs: ['Closed-back', 'Foldable', 'Lightweight'] },
    { id: 33, category: 'Studio Headphones', name: 'Beyerdynamic DT770', price: 13197, rating: 4.5, img: 'images/products/dt770.png', desc: 'High isolation over-ear headphones.', specs: ['Closed-back', '80/250/600Ω', 'Comfortable'] },
    { id: 34, category: 'Studio Headphones', name: 'AKG K240', price: 5727, rating: 4.0, img: 'images/products/akg-k240.png', desc: 'Semi-open headphones for mixing.', specs: ['Semi-open', '30mm drivers', 'Adjustable headband'] },
    { id: 35, category: 'Studio Headphones', name: 'Sennheiser HD280', price: 8217, rating: 4.2, img: 'images/products/hd280.png', desc: 'Rugged and foldable headphones.', specs: ['Closed-back', 'Rotating earcups', 'Noise isolation'] },
    { id: 36, category: 'Studio Headphones', name: 'Yamaha HPH-MT5', price: 12367, rating: 4.1, img: 'images/products/yamaha-hph-mt5.png', desc: 'Reference monitor headphones.', specs: ['Closed-back', 'φ40mm drivers', 'Lightweight'] },
    { id: 37, category: 'Studio Headphones', name: 'Shure SRH440', price: 8217, rating: 4.0, img: 'images/products/shure-srh440.png', desc: 'Detailed audio reproduction.', specs: ['Closed-back', 'Detachable cable', 'Comfort cushions'] },
    { id: 38, category: 'Studio Headphones', name: 'Samson SR850', price: 4067, rating: 3.7, img: 'images/products/samson-sr850.png', desc: 'Budget semi-open headphones.', specs: ['Semi-open', '80mm drivers', 'Gold connects'] },
    { id: 39, category: 'Studio Headphones', name: 'JBL Quantum', price: 7387, rating: 3.8, img: 'images/products/jbl-quantum.png', desc: 'Gaming-oriented studio headphones.', specs: ['Closed-back', 'Detachable mic', 'RGB lighting'] },
    { id: 40, category: 'Studio Headphones', name: 'OneOdio Pro', price: 4067, rating: 3.6, img: 'images/products/oneodio-pro.png', desc: 'Affordable professional headphones.', specs: ['Closed-back', 'Dual plug', 'Memory foam'] },
    { id: 41, category: 'Studio Headphones', name: 'Beyerdynamic DT990', price: 16437, rating: 4.4, img: 'images/products/dt990.png', desc: 'Open-back reference headphones.', specs: ['Open-back', '600Ω', 'High fidelity'] },
    { id: 42, category: 'Studio Headphones', name: 'Sennheiser HD599', price: 20567, rating: 4.5, img: 'images/products/hd599.png', desc: 'Open-back audiophile headphones.', specs: ['Open-back', '300Ω', 'Velour earpads'] },
    { id: 43, category: 'Studio Headphones', name: 'AKG K371', price: 9027, rating: 4.1, img: 'images/products/akg-k371.png', desc: 'Studio headphones with flat response.', specs: ['Closed-back', '50mm drivers', 'Flat frequency response'] },
    { id: 44, category: 'Studio Headphones', name: 'Audio Technica M40x', price: 9027, rating: 4.3, img: 'images/products/ath-m40x.png', desc: 'Professional studio headphones.', specs: ['Closed-back', '40mm drivers', 'Circumaural design'] },
    { id: 45, category: 'Studio Headphones', name: 'Shure SRH840', price: 11457, rating: 4.2, img: 'images/products/shure-srh840.png', desc: 'Premium studio headphones.', specs: ['Closed-back', '40mm drivers', 'Detachable cable'] },
    // Studio Monitors category (15 products)
    { id: 46, category: 'Studio Monitors', name: 'Yamaha HS5', price: 28797, rating: 4.5, img: 'images/products/yamaha-hs5.png', desc: '5-inch powered studio monitor.', specs: ['5-inch woofer', '1-inch tweeter', '80W power'] },
    { id: 47, category: 'Studio Monitors', name: 'Yamaha HS8', price: 41037, rating: 4.6, img: 'images/products/yamaha-hs8.png', desc: '8-inch powered studio monitor.', specs: ['8-inch woofer', '1-inch tweeter', '120W power'] },
    { id: 48, category: 'Studio Monitors', name: 'KRK Rokit 5', price: 20567, rating: 4.3, img: 'images/products/krk-rokit5.png', desc: '5-inch studio monitor.', specs: ['5-inch woofer', '1-inch tweeter', '50W power'] },
    { id: 49, category: 'Studio Monitors', name: 'KRK Rokit 8', price: 32847, rating: 4.4, img: 'images/products/krk-rokit8.png', desc: '8-inch studio monitor.', specs: ['8-inch woofer', '1-inch tweeter', '100W power'] },
    { id: 50, category: 'Studio Monitors', name: 'JBL 305P MKII', price: 16437, rating: 4.2, img: 'images/products/jbl-305p-mkii.png', desc: '5-inch powered studio monitor.', specs: ['5-inch woofer', '1-inch tweeter', '41W power'] },
    { id: 51, category: 'Studio Monitors', name: 'JBL 308P MKII', price: 24647, rating: 4.3, img: 'images/products/jbl-308p-mkii.png', desc: '8-inch powered studio monitor.', specs: ['8-inch woofer', '1-inch tweeter', '56W power'] },
    { id: 52, category: 'Studio Monitors', name: 'PreSonus Eris E5', price: 11457, rating: 4.0, img: 'images/products/presonus-eris-e5.png', desc: '5-inch studio monitor.', specs: ['5-inch woofer', '1-inch tweeter', '25W power'] },
    { id: 53, category: 'Studio Monitors', name: 'PreSonus Eris E8', price: 16437, rating: 4.1, img: 'images/products/presonus-eris-e8.jpeg', desc: '8-inch studio monitor.', specs: ['8-inch woofer', '1-inch tweeter', '35W power'] },
    { id: 54, category: 'Studio Monitors', name: 'Mackie CR3', price: 7387, rating: 3.8, img: 'images/products/mackie-cr3.jpeg', desc: '3-inch multimedia monitor.', specs: ['3-inch woofer', '0.75-inch tweeter', '20W power'] },
    { id: 55, category: 'Studio Monitors', name: 'Mackie CR5', price: 9027, rating: 3.9, img: 'images/products/mackie-cr5.jpeg', desc: '5-inch multimedia monitor.', specs: ['5-inch woofer', '1-inch tweeter', '50W power'] },
    { id: 56, category: 'Studio Monitors', name: 'Adam Audio T5V', price: 28797, rating: 4.4, img: 'images/products/adam-t5v.jpeg', desc: '5-inch studio monitor.', specs: ['5-inch woofer', '4-inch woofer', '50W power'] },
    { id: 57, category: 'Studio Monitors', name: 'Adam Audio T7V', price: 41037, rating: 4.5, img: 'images/products/adam-t7v.jpeg', desc: '7-inch studio monitor.', specs: ['7-inch woofer', '4-inch woofer', '70W power'] },
    { id: 58, category: 'Studio Monitors', name: 'Behringer Truth B2031A', price: 20567, rating: 4.0, img: 'images/products/behringer-b2031a.jpeg', desc: '6.5-inch active monitor.', specs: ['6.5-inch woofer', '1-inch tweeter', '75W power'] },
    { id: 59, category: 'Studio Monitors', name: 'IK Multimedia iLoud', price: 16437, rating: 4.1, img: 'images/products/ik-iloud.jpeg', desc: '4-inch studio monitor.', specs: ['4-inch woofer', '1-inch tweeter', '40W power'] },
    { id: 60, category: 'Studio Monitors', name: 'Kali Audio LP6', price: 20567, rating: 4.2, img: 'images/products/kali-lp6.jpeg', desc: '6-inch studio monitor.', specs: ['6-inch woofer', '1-inch tweeter', '60W power'] },
    // Audio Interfaces category (15 products)
    { id: 61, category: 'Audio Interfaces', name: 'Focusrite Scarlett 2i2', price: 16437, rating: 4.4, img: 'images/products/focusrite-scarlett-2i2.png', desc: '2-in/2-out audio interface.', specs: ['2-in/2-out', '24-bit/192kHz', '2 mic preamps'] },
    { id: 62, category: 'Audio Interfaces', name: 'Focusrite Scarlett Solo', price: 11457, rating: 4.2, img: 'images/products/focusrite-scarlett-solo.png', desc: '1-in/2-out audio interface.', specs: ['1-in/2-out', '24-bit/192kHz', '1 mic preamp'] },
    { id: 63, category: 'Audio Interfaces', name: 'PreSonus AudioBox USB', price: 9027, rating: 4.0, img: 'images/products/presonus-audiobox-usb.png', desc: '2-in/2-out USB interface.', specs: ['2-in/2-out', '24-bit/96kHz', '2 mic preamps'] },
    { id: 64, category: 'Audio Interfaces', name: 'Behringer UMC22', price: 5727, rating: 3.8, img: 'images/products/behringer-umc22.png', desc: '2-in/2-out audio interface.', specs: ['2-in/2-out', '48kHz', '2 mic preamps'] },
    { id: 65, category: 'Audio Interfaces', name: 'Behringer UMC204HD', price: 11457, rating: 4.0, img: 'images/products/behringer-umc204hd.png', desc: '2-in/4-out audio interface.', specs: ['2-in/4-out', '24-bit/192kHz', '2 mic preamps'] },
    { id: 66, category: 'Audio Interfaces', name: 'M-Audio M-Track Duo', price: 7387, rating: 3.9, img: 'images/products/maudio-mtrack-duo.png', desc: '2-in/2-out USB interface.', specs: ['2-in/2-out', '24-bit/96kHz', '2 mic preamps'] },
    { id: 67, category: 'Audio Interfaces', name: 'Steinberg UR22C', price: 20567, rating: 4.3, img: 'images/products/steinberg-ur22c.png', desc: '2-in/2-out audio interface.', specs: ['2-in/2-out', '32-bit/192kHz', '2 mic preamps'] },
    { id: 68, category: 'Audio Interfaces', name: 'Native Instruments Komplete Audio 2', price: 11457, rating: 4.1, img: 'images/products/ni-komplete-audio2.png', desc: '2-in/2-out audio interface.', specs: ['2-in/2-out', '24-bit/192kHz', '2 mic preamps'] },
    { id: 69, category: 'Audio Interfaces', name: 'Audient EVO 4', price: 20567, rating: 4.4, img: 'images/products/audient-evo4.png', desc: '4-in/4-out audio interface.', specs: ['4-in/4-out', '24-bit/96kHz', '2 mic preamps'] },
    { id: 70, category: 'Audio Interfaces', name: 'Audient iD4', price: 28797, rating: 4.5, img: 'images/products/audient-id4.png', desc: '2-in/2-out audio interface.', specs: ['2-in/2-out', '24-bit/96kHz', '1 mic preamp'] },
    { id: 71, category: 'Audio Interfaces', name: 'Universal Audio Volt 2', price: 41037, rating: 4.6, img: 'images/products/ua-volt2.png', desc: '2-in/2-out audio interface.', specs: ['2-in/2-out', '24-bit/192kHz', 'Unison technology'] },
    { id: 72, category: 'Audio Interfaces', name: 'Motu M2', price: 20567, rating: 4.2, img: 'images/products/motu-m2.png', desc: '2-in/2-out audio interface.', specs: ['2-in/2-out', '24-bit/192kHz', '2 mic preamps'] },
    { id: 73, category: 'Audio Interfaces', name: 'SSL 2 Interface', price: 28797, rating: 4.3, img: 'images/products/ssl-2.jpeg', desc: '2-in/2-out audio interface.', specs: ['2-in/2-out', '24-bit/192kHz', '2 mic preamps'] },
    { id: 74, category: 'Audio Interfaces', name: 'Tascam US-2x2', price: 11457, rating: 4.0, img: 'images/products/tascam-us-2x2.png', desc: '２-in/２-out audio interface.', specs: ['２-in/２-out', '２４-bit/９６kHz', '２ mic preamps'] },
    { id: 75, category: 'Audio Interfaces', name: 'Zoom U24', price: 9027, rating: 3.9, img: 'images/products/zoom-u24.jpeg', desc: '2-in/2-out audio interface.', specs: ['2-in/2-out', '24-bit/96kHz', '2 mic preamps'] },

    // Mixers category (15 products)
    { id: 76, category: 'Mixers', name: 'Yamaha MG10XU', price: 20567, rating: 4.3, img: 'images/products/yamaha-mg10xu.jpeg', desc: '10-channel analog mixer.', specs: ['10 channels', 'USB I/O', 'SPX effects'] },
    { id: 77, category: 'Mixers', name: 'Yamaha MG12XU', price: 24647, rating: 4.4, img: 'images/products/yamaha-mg12xu.jpeg', desc: '12-channel analog mixer.', specs: ['12 channels', 'USB I/O', 'SPX effects'] },
    { id: 78, category: 'Mixers', name: 'Behringer Xenyx Q802USB', price: 9027, rating: 4.0, img: 'images/products/behringer-xenyx-q802usb.jpeg', desc: '8-channel analog mixer.', specs: ['8 channels', 'USB I/O', 'British EQ'] },
    { id: 79, category: 'Mixers', name: 'Behringer Xenyx Q1202USB', price: 11457, rating: 4.1, img: 'images/products/behringer-xenyx-q1202usb.jpeg', desc: '12-channel analog mixer.', specs: ['12 channels', 'USB I/O', 'British EQ'] },
    { id: 80, category: 'Mixers', name: 'Mackie ProFX6v3', price: 16437, rating: 4.2, img: 'images/products/mackie-profx6v3.jpeg', desc: '6-channel mixer with effects.', specs: ['6 channels', 'USB I/O', 'GigFX effects'] },
    { id: 81, category: 'Mixers', name: 'Mackie ProFX10v3', price: 20567, rating: 4.3, img: 'images/products/mackie-profx10v3.jpeg', desc: '10-channel mixer with effects.', specs: ['10 channels', 'USB I/O', 'GigFX effects'] },
    { id: 82, category: 'Mixers', name: 'Soundcraft Notepad 5', price: 7387, rating: 3.9, img: 'images/products/soundcraft-notepad5.jpeg', desc: '5-channel analog mixer.', specs: ['5 channels', 'USB I/O', 'Lexicon effects'] },
    { id: 83, category: 'Mixers', name: 'Soundcraft Notepad 12FX', price: 11457, rating: 4.0, img: 'images/products/soundcraft-notepad12fx.jpeg', desc: '12-channel analog mixer.', specs: ['12 channels', 'USB I/O', 'Lexicon effects'] },
    { id: 84, category: 'Mixers', name: 'Allen & Heath ZEDi-10', price: 16437, rating: 4.2, img: 'images/products/ah-zedi10.jpeg', desc: '10-channel analog mixer.', specs: ['10 channels', 'USB I/O', 'DuoPre preamps'] },
    { id: 85, category: 'Mixers', name: 'Allen & Heath ZED-12FX', price: 20567, rating: 4.3, img: 'images/products/ah-zed12fx.jpeg', desc: '12-channel analog mixer.', specs: ['12 channels', 'USB I/O', 'DuoPre preamps'] },
    { id: 86, category: 'Mixers', name: 'PreSonus StudioLive AR8', price: 28797, rating: 4.4, img: 'images/products/presonus-studiolive-ar8.jpeg', desc: '8-channel digital mixer.', specs: ['8 channels', 'USB I/O', 'Fat Channel processing'] },
    { id: 87, category: 'Mixers', name: 'PreSonus StudioLive AR12', price: 36997, rating: 4.5, img: 'images/products/presonus-studiolive-ar12.jpeg', desc: '12-channel digital mixer.', specs: ['12 channels', 'USB I/O', 'Fat Channel processing'] },
    { id: 88, category: 'Mixers', name: 'Behringer X Air XR12', price: 20567, rating: 4.1, img: 'images/products/behringer-xair-xr12.jpeg', desc: '12-channel digital mixer.', specs: ['12 channels', 'USB I/O', 'Effects processor'] },
    { id: 89, category: 'Mixers', name: 'Yamaha AG06', price: 16437, rating: 4.2, img: 'images/products/yamaha-ag06.jpeg', desc: '6-channel analog mixer.', specs: ['6 channels', 'USB I/O', 'SPX effects'] },
    { id: 90, category: 'Mixers', name: 'Roland GO Mixer Pro', price: 28797, rating: 4.3, img: 'images/products/roland-go-mixer-pro.jpeg', desc: '14-channel digital mixer.', specs: ['14 channels', 'USB I/O', 'Built-in effects'] }
];

// Authentication / wishlist helpers
function getUsers() {
    return JSON.parse(localStorage.getItem('musicgear_users')) || [];
}
function setUsers(users) {
    localStorage.setItem('musicgear_users', JSON.stringify(users));
}
function getCurrentUser() {
    return JSON.parse(localStorage.getItem('musicgear_current_user')) || null;
}
function setCurrentUser(user) {
    localStorage.setItem('musicgear_current_user', JSON.stringify(user));
    renderProfileMenu();
}
function logoutUser() {
    localStorage.removeItem('musicgear_current_user');
    renderProfileMenu();
}
function getLikedProducts() {
    return JSON.parse(localStorage.getItem('musicgear_likes')) || [];
}
function saveLikedProducts(list) {
    localStorage.setItem('musicgear_likes', JSON.stringify(list));
}
function isProductLiked(id) {
    const likes = getLikedProducts();
    return likes.includes(id);
}
function toggleProductLike(id) {
    if (!getCurrentUser()) {
        showNotification('Please login first to continue.');
        showAuthModal('login');
        return;
    }
    let likes = getLikedProducts();
    if (likes.includes(id)) {
        likes = likes.filter(x => x !== id);
        showNotification('Removed from Liked Products');
    } else {
        likes.push(id);
        showNotification('Added to Liked Products');
    }
    saveLikedProducts(likes);
    renderProfileMenu();
    if (document.getElementById('liked-products')) {
        renderLikedProducts();
    }
}

// helper function to read query params
function getQueryParams() {
    const params = {};
    location.search.substr(1).split('&').forEach(pair => {
        if(!pair) return;
        const [key, value] = pair.split('=');
        params[decodeURIComponent(key)] = decodeURIComponent(value);
    });
    return params;
}

// render functions
function renderProducts(containerId, list) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    if (list.length === 0) {
        container.innerHTML = '<div style="text-align: center; padding: 2rem; color: #999;">No products found. Try adjusting your filters.</div>';
        return;
    }
    list.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        const rating = Math.floor(p.rating);
        const hasHalf = p.rating % 1 >= 0.5;
        let ratingStars = '★'.repeat(rating);
        if (hasHalf) ratingStars += '☆';
        ratingStars += '☆'.repeat(5 - Math.ceil(p.rating));
        const liked = isProductLiked(p.id);
        card.innerHTML = `
            <img src="${p.img}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/260x260?text=${encodeURIComponent(p.name)}'">
            <div class="product-info">
                <h3>${p.name}</h3>
                <div class="price">₹${p.price.toLocaleString('en-IN')}</div>
                <div class="rating">${ratingStars} <span style="font-size: 0.85rem; color: #999;">${p.rating}</span></div>
            </div>
            <div class="action-overlay">
                <div class="action-buttons">
                    <button class="quick-view" data-id="${p.id}" title="Quick View"><i class="fas fa-eye"></i></button>
                    <button class="add-cart" data-id="${p.id}" title="Add to Cart"><i class="fas fa-shopping-cart"></i></button>
                    <button class="wishlist ${liked ? 'liked' : ''}" data-id="${p.id}" title="Add to Wishlist"><i class="${liked ? 'fas' : 'far'} fa-heart"></i></button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
    attachProductListeners();
}

// filters and search
function applyFilters() {
    const search = document.getElementById('search-input')?.value.toLowerCase() || '';
    const category = document.getElementById('category-filter')?.value || '';
    const maxPrice = document.getElementById('price-range')?.value || Infinity;
    let result = products.filter(p => {
        return (!category || p.category === category)
            && (p.name.toLowerCase().includes(search))
            && (p.price <= maxPrice);
    });
    renderProducts('shop-products', result);
}

// Profile menu and authentication
function renderProfileMenu() {
    const menu = document.querySelector('.profile-menu');
    if (!menu) return;

    const user = getCurrentUser();
    menu.innerHTML = '';

    if (!user) {
        // Not logged in: show login/signup options
        menu.innerHTML = `
            <a href="#" data-action="login"><i class="fas fa-sign-in-alt"></i> Login</a>
            <a href="#" data-action="signup"><i class="fas fa-user-plus"></i> Signup</a>
        `;
    } else {
        // Logged in: show dropdown
        menu.innerHTML = `
            <a href="profile.html"><i class="fas fa-user"></i> My Profile</a>
            <a href="liked.html"><i class="fas fa-heart"></i> My Liked Products</a>
            <a href="orders.html"><i class="fas fa-box"></i> My Orders</a>
            <a href="#" data-action="logout"><i class="fas fa-sign-out-alt"></i> Logout</a>
        `;
    }

    menu.querySelectorAll('a[data-action]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const action = link.dataset.action;
            if (action === 'login') {
                showAuthModal('login');
            } else if (action === 'signup') {
                showAuthModal('signup');
            } else if (action === 'logout') {
                logoutUser();
                renderProfileMenu();
            }
            menu.classList.remove('open');
        });
    });
}

function ensureAuthModal() {
    if (document.getElementById('auth-modal')) return;

    const modal = document.createElement('div');
    modal.id = 'auth-modal';
    modal.className = 'auth-modal';
    modal.innerHTML = `
        <div class="auth-card">
            <button class="close-btn">&times;</button>
            <div class="auth-body">
                <div class="auth-form" data-form="login">
                    <h2>Login</h2>
                    <div class="form-group">
                        <input type="email" id="login-email" placeholder="Email" required>
                    </div>
                    <div class="form-group">
                        <input type="password" id="login-password" placeholder="Password" required>
                    </div>
                    <button id="login-submit" class="btn primary">Login</button>
                    <p class="auth-link">New user? <a href="#" id="switch-to-signup">Signup</a></p>
                </div>
                <div class="auth-form" data-form="signup" style="display:none;">
                    <h2>Signup</h2>
                    <div class="form-group">
                        <input type="text" id="signup-name" placeholder="Full Name" required>
                    </div>
                    <div class="form-group">
                        <input type="email" id="signup-email" placeholder="Email" required>
                    </div>
                    <div class="form-group">
                        <input type="password" id="signup-password" placeholder="Password" required>
                    </div>
                    <div class="form-group">
                        <input type="password" id="signup-confirm-password" placeholder="Confirm Password" required>
                    </div>
                    <button id="signup-submit" class="btn primary">Create Account</button>
                    <p class="auth-link">Already have an account? <a href="#" id="switch-to-login">Login</a></p>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.close-btn').onclick = closeAuthModal;
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeAuthModal();
    });

    document.getElementById('switch-to-signup').onclick = (e) => {
        e.preventDefault();
        modal.querySelectorAll('.auth-form').forEach(form => {
            form.style.display = form.dataset.form === 'signup' ? 'block' : 'none';
        });
    };

    document.getElementById('switch-to-login').onclick = (e) => {
        e.preventDefault();
        modal.querySelectorAll('.auth-form').forEach(form => {
            form.style.display = form.dataset.form === 'login' ? 'block' : 'none';
        });
    };

    document.getElementById('login-submit').onclick = () => {
        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value.trim();
        if (!email || !password) {
            alert('Please enter email and password');
            return;
        }
        const users = getUsers();
        const user = users.find(u => u.email === email && u.password === password);
        if (!user) {
            alert('Invalid credentials. Please signup first.');
            return;
        }
        setCurrentUser(user);
        showNotification('Logged in successfully');
        closeAuthModal();
    };

    document.getElementById('signup-submit').onclick = () => {
        const name = document.getElementById('signup-name').value.trim();
        const email = document.getElementById('signup-email').value.trim();
        const password = document.getElementById('signup-password').value.trim();
        const confirmPassword = document.getElementById('signup-confirm-password').value.trim();
        if (!name || !email || !password || !confirmPassword) {
            alert('Please fill all fields');
            return;
        }
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        const users = getUsers();
        if (users.find(u => u.email === email)) {
            alert('Email already registered');
            return;
        }
        const user = { name, email, password, orders: [] };
        users.push(user);
        setUsers(users);
        setCurrentUser(user);
        showNotification('Account created and logged in');
        closeAuthModal();
    };
}

function showAuthModal(form = 'login') {
    const modal = document.getElementById('auth-modal');
    if (!modal) return;
    modal.classList.add('open');
    modal.querySelectorAll('.auth-form').forEach(f => {
        f.style.display = f.dataset.form === form ? 'block' : 'none';
    });
}

function closeAuthModal() {
    const modal = document.getElementById('auth-modal');
    if (!modal) return;
    modal.classList.remove('open');
}

function setupDocumentClickHandlers() {
    document.addEventListener('click', (e) => {
        const profileMenu = document.querySelector('.profile-menu');
        const profileIcon = document.querySelector('.profile-icon');
        if (!profileMenu || !profileIcon) return;
        if (!profileMenu.contains(e.target) && !profileIcon.contains(e.target)) {
            profileMenu.classList.remove('open');
        }
    });
}

// quick view modal
function showModal(product) {
    let modal = document.querySelector('.modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.className = 'modal';
        document.body.appendChild(modal);
    }
    
    const rating = Math.floor(product.rating);
    const hasHalf = product.rating % 1 >= 0.5;
    let ratingStars = '★'.repeat(rating);
    if (hasHalf) ratingStars += '☆';
    ratingStars += '☆'.repeat(5 - Math.ceil(product.rating));
    
    modal.innerHTML = `
        <div class="modal-content">
            <button class="close-btn">&times;</button>
            <div class="modal-image">
                <img src="${product.img}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/500x500?text=${encodeURIComponent(product.name)}'">
            </div>
            <div class="modal-info">
                <h2>${product.name}</h2>
                <div class="price">₹${product.price.toLocaleString('en-IN')}</div>
                <div style="margin-bottom: 1rem; color: #f39c12; font-weight: 600;">${ratingStars} <span style="color: #999;">${product.rating}/5</span></div>
                <p>${product.desc}</p>
                <strong style="display: block; margin-bottom: 0.5rem; color: #2c3e50;">Specifications:</strong>
                <ul class="specs">
                    ${product.specs.map(s => `<li>${s}</li>`).join('')}
                </ul>
                <button class="btn primary add-cart" data-id="${product.id}" style="width: 100%; margin-top: 1rem;">Add to Cart</button>
            </div>
        </div>
    `;
    
    modal.querySelector('.close-btn').addEventListener('click', () => modal.classList.remove('open'));
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('open');
    });
    
    modal.classList.add('open');
    attachAddCartButtons();
}

// attach product card listeners (quick view/add/wish)
function attachProductListeners() {
    document.querySelectorAll('.quick-view').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            const prod = products.find(p => p.id == btn.dataset.id);
            if (prod) showModal(prod);
        };
    });
    document.querySelectorAll('.add-cart').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            addToCart(Number(btn.dataset.id));
            showNotification('Product added to cart!');
        };
    });
    document.querySelectorAll('.wishlist').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            const id = Number(btn.dataset.id);
            toggleProductLike(id);
            const liked = isProductLiked(id);
            const icon = btn.querySelector('i');
            if (icon) icon.className = `${liked ? 'fas' : 'far'} fa-heart`;
            if (liked) btn.classList.add('liked'); else btn.classList.remove('liked');
        };
    });
    document.querySelectorAll('.remove-liked').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            const id = Number(btn.dataset.id);
            toggleProductLike(id);
            renderLikedProducts(); // re-render to remove the product
            showNotification('Product removed from liked!');
        };
    });
}

function attachAddCartButtons() {
    document.querySelectorAll('.modal .add-cart').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            addToCart(Number(btn.dataset.id));
            document.querySelector('.modal').classList.remove('open');
            showNotification('Product added to cart!');
        };
    });
}

// notification
function showNotification(msg) {
    const notif = document.createElement('div');
    notif.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideUp 0.3s ease;
    `;
    notif.textContent = msg;
    document.body.appendChild(notif);
    setTimeout(() => {
        notif.style.animation = 'slideDown 0.3s ease';
        setTimeout(() => notif.remove(), 300);
    }, 2000);
}

// cart management
let cart = JSON.parse(localStorage.getItem('cart')) || [];
function saveCart() { localStorage.setItem('cart', JSON.stringify(cart)); updateCartCount(); renderCart(); }
function updateCartCount() {
    const count = cart.reduce((sum,item)=>sum+item.qty,0);
    document.getElementById('cart-count').textContent = count;
}
function addToCart(id, qty=1) {
    if (!getCurrentUser()) {
        showNotification('Please login first to continue.');
        showAuthModal('login');
        return;
    }
    const existing = cart.find(i=>i.id===id);
    if(existing) existing.qty += qty;
    else cart.push({ id, qty });
    saveCart();
}
function removeFromCart(id) {
    cart = cart.filter(i=>i.id!==id);
    saveCart();
}
function updateQuantity(id, qty) {
    const item = cart.find(i=>i.id===id);
    if(item) item.qty = qty;
    saveCart();
}
function renderCart() {
    const container = document.getElementById('cart-items');
    if(!container) return;
    container.innerHTML = '';
    if (cart.length === 0) {
        container.innerHTML = '<div style="text-align: center; padding: 3rem; color: #999;"><i class="fas fa-shopping-cart" style="font-size: 3rem; margin-bottom: 1rem; display: block; opacity: 0.5;"></i><p>Your cart is empty</p></div>';
    }
    let total = 0;
    cart.forEach(i => {
        const p = products.find(prod=>prod.id===i.id);
        const row = document.createElement('div');
        row.className = 'cart-item';
        row.innerHTML = `
            <img src="${p.img}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/100x100?text=${encodeURIComponent(p.name)}'">
            <div class="cart-item-info">
                <h4>${p.name}</h4>
                <div>₹${p.price.toLocaleString('en-IN')}</div>
                <input type="number" min="1" value="${i.qty}" class="quantity" data-id="${i.id}">
            </div>
            <button class="btn secondary remove-btn" data-id="${i.id}" title="Remove"><i class="fas fa-trash"></i></button>
        `;
        container.appendChild(row);
        total += p.price * i.qty;
    });
    document.getElementById('cart-total').textContent = `₹${total.toLocaleString('en-IN')}`;
    // toggle checkout button availability
    const checkoutBtn = document.getElementById('checkout-btn');
    if(checkoutBtn) {
        if(cart.length === 0) {
            checkoutBtn.style.pointerEvents = 'none';
            checkoutBtn.style.opacity = '0.6';
        } else {
            checkoutBtn.style.pointerEvents = 'auto';
            checkoutBtn.style.opacity = '1';
        }
    }
    // attach listeners
    document.querySelectorAll('.remove-btn').forEach(btn=>{
        btn.onclick = () => {
            removeFromCart(Number(btn.dataset.id));
            showNotification('Product removed from cart');
        };
    });
    document.querySelectorAll('.quantity').forEach(inp=>{
        inp.onchange = () => updateQuantity(Number(inp.dataset.id), Number(inp.value));
    });
}

// product detail page rendering
function renderDetail() {
    const params = getQueryParams();
    const id = Number(params.id);
    if(!id) return;
    const p = products.find(prod=>prod.id===id);
    if(!p) return;
    const gallery = document.getElementById('detail-gallery');
    const info = document.getElementById('detail-info');
    if(gallery) gallery.innerHTML = `<img src="${p.img}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/500x500?text=${encodeURIComponent(p.name)}'">`;
    if(info) {
        const rating = Math.floor(p.rating);
        const hasHalf = p.rating % 1 >= 0.5;
        let ratingStars = '★'.repeat(rating);
        if (hasHalf) ratingStars += '☆';
        ratingStars += '☆'.repeat(5 - Math.ceil(p.rating));
        
        info.innerHTML = `
            <h2>${p.name}</h2>
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                <div class="price">₹${p.price.toLocaleString('en-IN')}</div>
                <div style="color: #f39c12; font-weight: 600;">${ratingStars} <span style="color: #999;">${p.rating}/5</span></div>
            </div>
            <p class="description">${p.desc}</p>
            <strong style="display: block; margin-bottom: 1rem; color: #2c3e50; font-size: 1.05rem;">Specifications:</strong>
            <ul class="specs">${p.specs.map(s=>`<li>${s}</li>`).join('')}</ul>
            <div>
                <label>Quantity: <input type="number" id="detail-qty" value="1" min="1" class="quantity"></label>
            </div>
            <button class="btn primary" id="detail-addcart" style="width: 100%; margin-top: 1.5rem; padding: 0.9rem; font-size: 1rem;"><i class="fas fa-shopping-cart"></i> Add to Cart</button>
        `;
        document.getElementById('detail-addcart').onclick = () => {
            const q = Number(document.getElementById('detail-qty').value);
            addToCart(p.id, q);
            showNotification('Product added to cart!');
        };
    }
    // related products: same category, exclude itself
    const related = products.filter(prod=>prod.category===p.category && prod.id!==p.id).slice(0,4);
    renderProducts('related-products', related);
}

// page initialization
function initPage() {
    // navbar hamburger logic
    const hamb = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if(hamb){
        hamb.onclick = () => navLinks.classList.toggle('open');
    }
    // filter events
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    const priceRange = document.getElementById('price-range');
    if(searchInput) searchInput.oninput = applyFilters;
    if(categoryFilter) categoryFilter.onchange = applyFilters;
    if(priceRange) {
        priceRange.oninput = () => {
            document.getElementById('price-value').textContent = `₹${priceRange.value.toLocaleString('en-IN')}`;
            applyFilters();
        };
    }
    // load home products if exists
    if(document.getElementById('home-products')) {
        // pick some sample featured
        renderProducts('home-products', products.slice(0,8));
    }
    // shop page
    if(document.getElementById('shop-products')) {
        const params = getQueryParams();
        if(params.category) {
            document.getElementById('category-filter').value = params.category;
        }
        applyFilters();
    }
    // cart page
    renderCart();
    // detail page
    renderDetail();
    // liked page
    renderLikedProducts();
    // profile page
    renderProfile();
    // orders page
    renderOrders();
    // checkout page
    if(document.getElementById('checkout-cart-items')) {
        renderCheckout();
        setupPaymentListeners();
        attachUpiEventHandlers();
        // default to UPI method for convenience
        const defaultBtn = document.querySelector('#payment-methods .method[data-method="upi"]');
        if(defaultBtn) defaultBtn.click();
    }
    renderProfileMenu();
    ensureAuthModal();
    setupDocumentClickHandlers();
    updateCartCount();
    // profile icon click
    document.querySelectorAll('.profile-icon').forEach(icon => {
        icon.addEventListener('click', () => {
            // Always toggle dropdown
            const menu = icon.nextElementSibling;
            menu.classList.toggle('open');
        });
    });
    // logout button
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.onclick = () => {
            logoutUser();
            showNotification('Logged out successfully');
            renderProfileMenu();
            window.location.href = 'index.html';
        };
    }
}

// checkout rendering and payment helpers
function renderCheckout() {
    const container = document.getElementById('checkout-cart-items');
    if(!container) return;
    container.innerHTML = '';
    if(cart.length === 0) {
        container.innerHTML = '<div style="text-align:center;padding:3rem;color:#999;"><i class="fas fa-shopping-cart" style="font-size:3rem;opacity:0.5;margin-bottom:1rem;display:block;"></i><p>Your cart is empty</p></div>';
        document.getElementById('checkout-total').textContent = '₹0';
        const pm = document.getElementById('payment-methods');
        if(pm) pm.style.display = 'none';
        return;
    }
    let total = 0;
    cart.forEach(i => {
        const p = products.find(prod=>prod.id===i.id);
        const row = document.createElement('div');
        row.className = 'cart-item';
        row.innerHTML = `
            <div>${p.name}</div>
            <div>₹${(p.price*i.qty).toLocaleString('en-IN')}</div>
        `;
        container.appendChild(row);
        total += p.price * i.qty;
    });
    document.getElementById('checkout-total').textContent = `₹${total.toLocaleString('en-IN')}`;
}

function renderLikedProducts() {
    const container = document.getElementById('liked-products');
    if(!container) return;
    const likedIds = getLikedProducts();
    const likedList = products.filter(p => likedIds.includes(p.id));
    container.innerHTML = '';
    if (likedList.length === 0) {
        container.innerHTML = '<div style="text-align: center; padding: 2rem; color: #999;">No liked products yet. Start exploring and add some to your wishlist!</div>';
        return;
    }
    likedList.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        const rating = Math.floor(p.rating);
        const hasHalf = p.rating % 1 >= 0.5;
        let ratingStars = '★'.repeat(rating);
        if (hasHalf) ratingStars += '☆';
        ratingStars += '☆'.repeat(5 - Math.ceil(p.rating));
        card.innerHTML = `
            <img src="${p.img}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/260x260?text=${encodeURIComponent(p.name)}'">
            <div class="product-info">
                <h3>${p.name}</h3>
                <div class="price">₹${p.price.toLocaleString('en-IN')}</div>
                <div class="rating">${ratingStars} <span style="font-size: 0.85rem; color: #999;">${p.rating}</span></div>
            </div>
            <div class="action-overlay">
                <div class="action-buttons">
                    <button class="quick-view" data-id="${p.id}" title="Quick View"><i class="fas fa-eye"></i></button>
                    <button class="add-cart" data-id="${p.id}" title="Add to Cart"><i class="fas fa-shopping-cart"></i></button>
                    <button class="remove-liked" data-id="${p.id}" title="Remove from Liked"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
    attachProductListeners();
}

function renderProfile() {
    const container = document.getElementById('profile-info');
    if(!container) return;
    const user = getCurrentUser();
    if(!user) {
        container.innerHTML = '<p>Please login to view your profile.</p>';
        return;
    }
    container.innerHTML = `
        <div class="info-item">
            <label>Name:</label>
            <span>${user.name}</span>
        </div>
        <div class="info-item">
            <label>Email:</label>
            <span>${user.email}</span>
        </div>
        <div class="info-item">
            <label>Orders:</label>
            <span>${user.orders ? user.orders.length : 0}</span>
        </div>
        <div class="info-item">
            <label>Liked Products:</label>
            <span>${getLikedProducts().length}</span>
        </div>
    `;
}

function renderOrders() {
    const container = document.getElementById('orders-list');
    if(!container) return;
    const user = getCurrentUser();
    if(!user || !user.orders || user.orders.length === 0) {
        container.innerHTML = '<p style="text-align:center;padding:2rem;color:#999;">No orders found.</p>';
        return;
    }
    container.innerHTML = '';
    user.orders.forEach(order => {
        const card = document.createElement('div');
        card.className = 'order-card';
        const date = new Date(order.date).toLocaleDateString();
        card.innerHTML = `
            <div class="order-header">
                <div class="order-id">${order.id}</div>
                <div class="order-date">${date}</div>
                <div class="order-status" style="color: ${order.status === 'Delivered' ? 'green' : order.status === 'Shipped' ? 'blue' : 'orange'};">${order.status || 'Pending'}</div>
            </div>
            <div class="order-items">
                ${order.items.map(item => `
                    <div class="order-item">
                        <span>${item.name} (x${item.qty})</span>
                        <span>₹${(item.price * item.qty).toLocaleString('en-IN')}</span>
                    </div>
                `).join('')}
            </div>
            <div class="order-total">Total: ₹${order.total.toLocaleString('en-IN')}</div>
        `;
        container.appendChild(card);
    });
}

let selectedPaymentMethod = null;
function setupPaymentListeners() {
    document.querySelectorAll('#payment-methods .method').forEach(el => {
        el.onclick = () => {
            document.querySelectorAll('#payment-methods .method').forEach(x=>x.classList.remove('selected'));
            el.classList.add('selected');
            selectedPaymentMethod = el.dataset.method;
            renderPaymentDetails(selectedPaymentMethod);
        };
    });
}

function renderPaymentDetails(method) {
    const container = document.getElementById('payment-details');
    if(!container) return;
    container.innerHTML = '';
    const total = document.getElementById('checkout-total').textContent.replace(/[₹,]/g,'');
    switch(method) {
        case 'upi':
            container.innerHTML = `
                <div class="form-group">
                    <label for="checkout-upi-id">UPI ID</label>
                    <input type="text" id="checkout-upi-id" placeholder="name@upi">
                </div>
                <button id="checkout-upi-btn" class="btn secondary">Pay via UPI App</button>
            `;
            document.getElementById('checkout-upi-btn').onclick = showUpiPopup;
            break;
        case 'card':
            container.innerHTML = `
                <div class="form-group">
                    <label>Card Number</label>
                    <input type="text" id="card-number" maxlength="16" placeholder="xxxx xxxx xxxx xxxx">
                </div>
                <div class="form-group">
                    <label>Expiry (MM/YY)</label>
                    <input type="text" id="card-expiry" maxlength="5" placeholder="MM/YY">
                </div>
                <div class="form-group">
                    <label>CVV</label>
                    <input type="text" id="card-cvv" maxlength="3" placeholder="***">
                </div>
                <button id="pay-btn" class="btn primary">Pay Now</button>
            `;
            document.getElementById('pay-btn').onclick = () => completePayment('card');
            break;
        case 'netbanking':
            container.innerHTML = `
                <div class="form-group">
                    <label>Select Bank</label>
                    <select id="bank-select">
                        <option>State Bank of India</option>
                        <option>HDFC Bank</option>
                        <option>ICICI Bank</option>
                        <option>Axis Bank</option>
                        <option>Other</option>
                    </select>
                </div>
                <button id="pay-btn" class="btn primary">Pay Now</button>
            `;
            document.getElementById('pay-btn').onclick = () => completePayment('netbanking');
            break;
        case 'cod':
            container.innerHTML = `
                <p>You will pay ₹${total} when the order is delivered.</p>
                <button id="pay-btn" class="btn primary">Place Order</button>
            `;
            document.getElementById('pay-btn').onclick = () => completePayment('cod');
            break;
        default:
            container.innerHTML = '<p>Please select a payment method above.</p>';
    }
}

function showUpiPopup() {
    const popup = document.getElementById('upi-popup');
    if(popup) popup.classList.add('open');
}
function closeUpiPopup() {
    const popup = document.getElementById('upi-popup');
    if(popup) popup.classList.remove('open');
}

function attachUpiEventHandlers() {
    const closeBtn = document.querySelector('#upi-popup .close-btn');
    if(closeBtn) closeBtn.onclick = closeUpiPopup;
    const payNow = document.getElementById('upi-pay-now');
    if(payNow) payNow.onclick = () => {
        const idField = document.getElementById('upi-id');
        if(idField && idField.value.trim() === '') {
            alert('Please enter a UPI ID');
            return;
        }
        closeUpiPopup();
        completePayment('upi');
    };
}

function generateOrderId() {
    return 'ORD' + Math.floor(Math.random() * 1000000) + Date.now();
}

function completePayment(method) {
    if (!getCurrentUser()) {
        showNotification('Please login first to continue.');
        showAuthModal('login');
        return;
    }
    // simulate delivery form validation
    const form = document.getElementById('delivery-form');
    if(form && !form.checkValidity()) {
        alert('Please fill in all delivery details');
        return;
    }
    const orderId = generateOrderId();
    document.getElementById('order-id').textContent = orderId;

    // store order history for logged-in users
    const orderTotal = Number(document.getElementById('checkout-total').textContent.replace(/[₹,]/g, '')) || 0;
    const orderItems = cart.map(item => {
        const prod = products.find(p => p.id === item.id);
        return {
            id: item.id,
            name: prod?.name || 'Unknown',
            qty: item.qty,
            price: prod?.price || 0
        };
    });
    const user = getCurrentUser();
    if (user) {
        user.orders = user.orders || [];
        // get delivery address
        const address = form ? `${form.querySelector('[name="name"]')?.value || ''}, ${form.querySelector('[name="address"]')?.value || ''}, ${form.querySelector('[name="city"]')?.value || ''}, ${form.querySelector('[name="state"]')?.value || ''} ${form.querySelector('[name="pincode"]')?.value || ''}`.trim() : '';
        user.orders.unshift({
            id: orderId,
            date: new Date().toISOString(),
            total: orderTotal,
            method,
            items: orderItems,
            address,
            status: 'Pending'
        });
        setCurrentUser(user);
        // update users array
        const users = getUsers();
        const idx = users.findIndex(u => u.email === user.email);
        if (idx !== -1) {
            users[idx] = user;
            setUsers(users);
        }
    }

    // copy summary
    const successSummary = document.getElementById('success-summary');
    const checkoutItems = document.getElementById('checkout-cart-items');
    if(successSummary && checkoutItems) {
        successSummary.innerHTML = checkoutItems.innerHTML;
    }
    document.getElementById('payment-success').classList.remove('hidden');
    // hide checkout form area
    const checkoutSection = document.querySelector('.checkout-section');
    if(checkoutSection) checkoutSection.style.display = 'none';
    // clear cart
    cart = [];
    saveCart();
}


document.addEventListener('DOMContentLoaded', initPage);
