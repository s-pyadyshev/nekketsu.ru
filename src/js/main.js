// Don't need to add import code by yourself when use usage.
// And no more need to manually include the regenerator-runtime helper when compiling generators after babel/core >= 7.18
import "core-js/stable";
import "regenerator-runtime/runtime";

import { vhFix } from "./vendor/vh-fix";
import { mobileMenu } from "./components/mobile-menu";

vhFix();
mobileMenu.init();
