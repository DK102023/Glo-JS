'use strict'

import scrollTopModule from './modules/scrolltop';
import mainSlider from "./modules/main-slider";
import accordeonModule from "./modules/accordeon";
import counter from "./modules/counter";
import mobileMenuDriver from "./modules/mobile-menu";
import anchorScroll from "./modules/anchor-scrolll";
import modalCalls from "./modules/modal-calls";
import carousel from "./modules/carousel";
import forms from "./modules/forms";


mobileMenuDriver()
anchorScroll()
mainSlider()
carousel()
scrollTopModule();
accordeonModule('.accordeon');
counter([10,20,'10 лет','<30'])
modalCalls()
forms()

