import "core-js/stable";
import "regenerator-runtime/runtime";

import { vhFix } from "./vendor/vh-fix";
import { mobileMenu } from "./components/mobile-menu";

vhFix();
mobileMenu.init();
