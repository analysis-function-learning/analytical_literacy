define(['handlebars'], function(Handlebars) {

this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

Handlebars.registerPartial("component", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__header "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":5,"column":30},"end":{"line":5,"column":54}}}))
    + "__header\">\n  <div class=\"component__header-inner "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":6,"column":38},"end":{"line":6,"column":62}}}))
    + "__header-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":20,"column":11}}})) != null ? stack1 : "")
    + "\n    "
    + alias3(((helper = (helper = lookupProperty(helpers,"component_description") || (depth0 != null ? lookupProperty(depth0,"component_description") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"component_description","hash":{},"data":data,"loc":{"start":{"line":22,"column":4},"end":{"line":22,"column":29}}}) : helper)))
    + "\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":4},"end":{"line":30,"column":11}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),(depth0 != null ? lookupProperty(depth0,"mobileInstruction") : depth0),{"name":"any","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":4},"end":{"line":38,"column":12}}})) != null ? stack1 : "")
    + "\n  </div>\n</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"component__title "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":9,"column":33},"end":{"line":9,"column":57}}}))
    + "__title\">\n\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibilityState") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":6},"end":{"line":13,"column":19}}})) != null ? stack1 : "")
    + "<div class=\"component__title-inner "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":15,"column":41},"end":{"line":15,"column":65}}}))
    + "__title-inner\""
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibilityState") : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":79},"end":{"line":15,"column":147}}})) != null ? stack1 : "")
    + ">"
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":16,"column":8},"end":{"line":16,"column":36}}})) != null ? stack1 : "")
    + "</div>\n\n    </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "      <div class=\"js-heading\"></div>";
},"5":function(container,depth0,helpers,partials,data) {
    return " aria-hidden=\"true\"";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"component__body "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":25,"column":32},"end":{"line":25,"column":56}}}))
    + "__body\">\n      <div class=\"component__body-inner "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":26,"column":40},"end":{"line":26,"column":64}}}))
    + "__body-inner\">\n        "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":27,"column":8},"end":{"line":27,"column":26}}})) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"component__instruction "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":33,"column":39},"end":{"line":33,"column":63}}}))
    + "__instruction\">\n      <div class=\"component__instruction-inner "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":34,"column":47},"end":{"line":34,"column":71}}}))
    + "__instruction-inner\">\n        "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":35,"column":8},"end":{"line":35,"column":33}}})) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),(depth0 != null ? lookupProperty(depth0,"body") : depth0),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":0},"end":{"line":42,"column":8}}})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("pageNav-item", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<button\r\n  class=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_iconClass") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":9},"end":{"line":4,"column":42}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"text") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":42},"end":{"line":4,"column":70}}})) != null ? stack1 : "")
    + " pagenav__btn"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isHidden") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":83},"end":{"line":4,"column":129}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"locked") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":129},"end":{"line":4,"column":172}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_classes") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":172},"end":{"line":4,"column":208}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"text") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":208},"end":{"line":4,"column":236}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_iconClass") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":236},"end":{"line":4,"column":270}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_alignIconRight") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.program(18, data, 0),"data":data,"loc":{"start":{"line":4,"column":270},"end":{"line":4,"column":335}}})) != null ? stack1 : "")
    + " js-pagenav-btn\"\r\n  role=\"link\"\r\n  data-type=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":6,"column":13},"end":{"line":6,"column":21}}}) : helper)))
    + "\"\r\n  data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_id") || (depth0 != null ? lookupProperty(depth0,"_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":7,"column":11},"end":{"line":7,"column":18}}}) : helper)))
    + "\"\r\n  data-item-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":8,"column":19},"end":{"line":8,"column":29}}}) : helper)))
    + "\"\r\n  "
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_isHidden") : depth0),(depth0 != null ? lookupProperty(depth0,"locked") : depth0),{"name":"any","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":2},"end":{"line":9,"column":55}}})) != null ? stack1 : "")
    + "\r\n  aria-label=\""
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"ariaLabel") : depth0),depth0,{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":10,"column":14},"end":{"line":10,"column":42}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"locked") : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.program(24, data, 0),"data":data,"loc":{"start":{"line":10,"column":43},"end":{"line":10,"column":257}}})) != null ? stack1 : "")
    + "\"\r\n  tooltip=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_showTooltip") : depth0),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":11},"end":{"line":11,"column":64}}})) != null ? stack1 : "")
    + "\">\r\n\r\n  <div class=\"pagenav__btn-inner\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_alignIconRight") : depth0),{"name":"unless","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":4},"end":{"line":21,"column":15}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"text") : depth0),{"name":"if","hash":{},"fn":container.program(34, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":4},"end":{"line":29,"column":11}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_alignIconRight") : depth0),{"name":"if","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":4},"end":{"line":37,"column":11}}})) != null ? stack1 : "")
    + "\r\n  </div>\r\n\r\n</button>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "btn-icon";
},"4":function(container,depth0,helpers,partials,data) {
    return " btn-text";
},"6":function(container,depth0,helpers,partials,data) {
    return " is-hidden is-disabled";
},"8":function(container,depth0,helpers,partials,data) {
    return " is-locked is-disabled";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_classes") || (depth0 != null ? lookupProperty(depth0,"_classes") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_classes","hash":{},"data":data,"loc":{"start":{"line":4,"column":189},"end":{"line":4,"column":201}}}) : helper)));
},"12":function(container,depth0,helpers,partials,data) {
    return " has-text";
},"14":function(container,depth0,helpers,partials,data) {
    return " has-icon";
},"16":function(container,depth0,helpers,partials,data) {
    return " icon-is-right";
},"18":function(container,depth0,helpers,partials,data) {
    return " icon-is-left";
},"20":function(container,depth0,helpers,partials,data) {
    return " disabled=\"disabled\"";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"_globals"))) && lookupProperty(stack1,"_accessibility"))) && lookupProperty(stack1,"_ariaLabels"))) && lookupProperty(stack1,"locked")), depth0));
},"24":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isComplete") : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.program(27, data, 0),"data":data,"loc":{"start":{"line":10,"column":109},"end":{"line":10,"column":250}}})) != null ? stack1 : "");
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"_globals"))) && lookupProperty(stack1,"_accessibility"))) && lookupProperty(stack1,"_ariaLabels"))) && lookupProperty(stack1,"complete")), depth0));
},"27":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"_globals"))) && lookupProperty(stack1,"_accessibility"))) && lookupProperty(stack1,"_ariaLabels"))) && lookupProperty(stack1,"incomplete")), depth0));
},"29":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"tooltip") : depth0),depth0,{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":11,"column":31},"end":{"line":11,"column":57}}})) != null ? stack1 : "");
},"31":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_iconClass") : depth0),{"name":"if","hash":{},"fn":container.program(32, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":4},"end":{"line":20,"column":11}}})) != null ? stack1 : "");
},"32":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"pagenav__btn-icon\">\r\n      <div class=\"icon "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_iconClass") || (depth0 != null ? lookupProperty(depth0,"_iconClass") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_iconClass","hash":{},"data":data,"loc":{"start":{"line":18,"column":23},"end":{"line":18,"column":37}}}) : helper)))
    + "\"></div>\r\n    </div>\r\n";
},"34":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"pagenav__btn-text\">\r\n      <div class=\"pagenav__btn-text-inner\">\r\n        "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"text") : depth0),depth0,{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":26,"column":8},"end":{"line":26,"column":31}}})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":42,"column":7}}})) != null ? stack1 : "");
},"useData":true}));

this["Handlebars"]["templates"]["article"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"article__header\">\n    <div class=\"article__header-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":22,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":30,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":6},"end":{"line":38,"column":13}}})) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"article__title\">\n\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibilityState") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":8},"end":{"line":15,"column":21}}})) != null ? stack1 : "")
    + "<div class=\"article__title-inner\""
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibilityState") : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":41},"end":{"line":17,"column":109}}})) != null ? stack1 : "")
    + ">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":18,"column":10},"end":{"line":18,"column":36}}})) != null ? stack1 : "")
    + "\n        </div>\n\n      </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"js-heading\"></div>";
},"5":function(container,depth0,helpers,partials,data) {
    return " aria-hidden=\"true\"";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"article__body\">\n        <div class=\"article__body-inner\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":27,"column":10},"end":{"line":27,"column":28}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"article__instruction\">\n        <div class=\"article__instruction-inner\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":35,"column":10},"end":{"line":35,"column":35}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<div class=\"article__inner\">\n\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),(depth0 != null ? lookupProperty(depth0,"body") : depth0),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":42,"column":10}}})) != null ? stack1 : "")
    + "\n  <div class=\"block__container\">\n  </div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["block"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"block__header\">\n    <div class=\"block__header-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":22,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":30,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":6},"end":{"line":38,"column":13}}})) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"block__title\">\n\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibilityState") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":8},"end":{"line":15,"column":21}}})) != null ? stack1 : "")
    + "<div class=\"block__title-inner\""
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibilityState") : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":39},"end":{"line":17,"column":107}}})) != null ? stack1 : "")
    + ">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":18,"column":10},"end":{"line":18,"column":36}}})) != null ? stack1 : "")
    + "\n        </div>\n\n      </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"js-heading\"></div>";
},"5":function(container,depth0,helpers,partials,data) {
    return " aria-hidden=\"true\"";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"block__body\">\n        <div class=\"block__body-inner\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":27,"column":10},"end":{"line":27,"column":28}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"block__instruction\">\n        <div class=\"block__instruction-inner\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":35,"column":10},"end":{"line":35,"column":35}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<div class=\"block__inner\">\n\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),(depth0 != null ? lookupProperty(depth0,"body") : depth0),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":42,"column":10}}})) != null ? stack1 : "")
    + "\n  <div class=\"component__container\">\n  </div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["buttons"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":3,"column":117},"end":{"line":3,"column":278}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"_globals"))) && lookupProperty(stack1,"_accessibility"))) && lookupProperty(stack1,"_ariaLabels"))) && lookupProperty(stack1,"answeredCorrectly")), depth0));
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"_globals"))) && lookupProperty(stack1,"_accessibility"))) && lookupProperty(stack1,"_ariaLabels"))) && lookupProperty(stack1,"answeredIncorrectly")), depth0));
},"6":function(container,depth0,helpers,partials,data) {
    return "  <div class=\"js-answer-live-region aria-label\" aria-live=\"assertive\" aria-atomic=\"true\"></div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "<div class=\"btn__display js-display-attempts\">\n  <div class=\"btn__display-inner js-insert-attempts-string\" aria-live=\"assertive\">\n  </div>\n</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"btn__response-container\">\n\n  <div class=\"btn__marking js-btn-marking u-display-none\" aria-label=\""
    + ((stack1 = (lookupProperty(helpers,"all")||(depth0 && lookupProperty(depth0,"all"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"_isInteractionComplete") : depth0),(depth0 != null ? lookupProperty(depth0,"_canShowMarking") : depth0),{"name":"all","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":70},"end":{"line":3,"column":286}}})) != null ? stack1 : "")
    + "\">\n    <div class=\"icon\" aria-hidden=\"true\"></div>\n  </div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_canShowModelAnswer") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":2},"end":{"line":9,"column":9}}})) != null ? stack1 : "")
    + "\n  <button class=\"btn-text btn__action js-btn-action\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_buttons") : depth0)) != null ? lookupProperty(stack1,"_submit") : stack1)) != null ? lookupProperty(stack1,"ariaLabel") : stack1), depth0))
    + "\">\n    "
    + ((stack1 = alias2(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_buttons") : depth0)) != null ? lookupProperty(stack1,"_submit") : stack1)) != null ? lookupProperty(stack1,"buttonText") : stack1), depth0)) != null ? stack1 : "")
    + "\n  </button>\n\n  <button class=\"btn-text btn__feedback js-btn-feedback is-disabled\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_buttons") : depth0)) != null ? lookupProperty(stack1,"_showFeedback") : stack1)) != null ? lookupProperty(stack1,"ariaLabel") : stack1), depth0))
    + "\" aria-disabled=\"true\">\n    "
    + ((stack1 = alias2(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_buttons") : depth0)) != null ? lookupProperty(stack1,"_showFeedback") : stack1)) != null ? lookupProperty(stack1,"buttonText") : stack1), depth0)) != null ? stack1 : "")
    + "\n  </button>\n\n</div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_shouldDisplayAttempts") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":0},"end":{"line":27,"column":7}}})) != null ? stack1 : "");
},"useData":true});

this["Handlebars"]["templates"]["drawer"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"drawer__inner\">\n\n  <span id=\"drawer-heading\" class=\"aria-label\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"drawer") : stack1), depth0))
    + "</span>\n\n  <div class=\"drawer__holder js-drawer-holder\"></div>\n\n  <div class=\"drawer__toolbar u-clearfix\">\n\n    <div class=\"drawer__back\">\n      <button class=\"btn-icon drawer__btn drawer__back-btn js-drawer-back-btn\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"previous") : stack1), depth0))
    + "\">\n        <div class=\"icon\"></div>\n      </button>\n    </div>\n\n    <div class=\"drawer__close\">\n      <button class=\"btn-icon drawer__btn drawer__close-btn js-drawer-close-btn\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"closeDrawer") : stack1), depth0))
    + "\">\n        <div class=\"icon\"></div>\n      </button>\n    </div>\n\n  </div>\n\n  "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"a11y_wrap_focus") || (depth0 != null ? lookupProperty(depth0,"a11y_wrap_focus") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"a11y_wrap_focus","hash":{},"data":data,"loc":{"start":{"line":23,"column":2},"end":{"line":23,"column":23}}}) : helper))) != null ? stack1 : "")
    + "\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["drawerItem"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"className") || (depth0 != null ? lookupProperty(depth0,"className") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"className","hash":{},"data":data,"loc":{"start":{"line":2,"column":68},"end":{"line":2,"column":81}}}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"drawer__menu-title drawer__item-title\">\n      <div class=\"drawer__menu-title-inner drawer__item-title-inner\">\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":7,"column":8},"end":{"line":7,"column":19}}}) : helper))) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"drawer__menu-body drawer__item-body\">\n      <div class=\"drawer__menu-body-inner drawer__item-body-inner\">\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data,"loc":{"start":{"line":15,"column":8},"end":{"line":15,"column":25}}}) : helper))) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"drawer__menu-inner drawer__item-inner\" role=\"listitem\">\n  <button class=\"drawer__menu-btn drawer__item-btn"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"className") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":50},"end":{"line":2,"column":88}}})) != null ? stack1 : "")
    + "\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":10,"column":11}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":4},"end":{"line":18,"column":11}}})) != null ? stack1 : "")
    + "\n  </button>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["heading"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isOptional") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":13,"column":11}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":8,"column":25}}})) != null ? stack1 : "")
    + "\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isComplete") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":13,"column":4}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"complete") : stack1), depth0))
    + " "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":10,"column":55},"end":{"line":10,"column":74}}})) != null ? stack1 : "")
    + "\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"incomplete") : stack1), depth0))
    + " "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":12,"column":57},"end":{"line":12,"column":76}}})) != null ? stack1 : "")
    + "\n    ";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":15,"column":4},"end":{"line":15,"column":23}}})) != null ? stack1 : "")
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias4(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n\n<div id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_id") || (depth0 != null ? lookupProperty(depth0,"_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":3,"column":9},"end":{"line":3,"column":16}}}) : helper)))
    + "-heading\" class=\"js-heading-inner\" "
    + ((stack1 = (lookupProperty(helpers,"a11y_attrs_heading")||(depth0 && lookupProperty(depth0,"a11y_attrs_heading"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_type") : depth0),{"name":"a11y_attrs_heading","hash":{},"data":data,"loc":{"start":{"line":3,"column":51},"end":{"line":3,"column":81}}})) != null ? stack1 : "")
    + ">\n\n  <span class=\"aria-label\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isA11yCompletionDescriptionEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":16,"column":9}}})) != null ? stack1 : "")
    + "  </span>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["loading"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"loading js-loading\">\n  <div class=\"loading__inner\">\n    Loading...\n  </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["nav"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <button class=\"btn-text nav__btn nav__skip-btn\" data-event=\"skipNavigation\" aria-label=\""
    + container.escapeExpression(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"skipNavigation") : stack1), depth0))
    + "\">\n      "
    + ((stack1 = alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"skipNavigationText") : stack1), depth0)) != null ? stack1 : "")
    + "\n  </button>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias2(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<div class=\"nav__inner u-clearfix\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_accessibility") : depth0)) != null ? lookupProperty(stack1,"_isSkipNavigationEnabled") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":2},"end":{"line":11,"column":9}}})) != null ? stack1 : "")
    + "\n  <button class=\"btn-icon nav__btn nav__back-btn js-nav-back-btn u-display-none\" data-event=\"backButton\" aria-label=\""
    + alias2(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"previous") : stack1), depth0))
    + "\" role=\"link\">\n    <div class=\"icon\"></div>\n  </button>\n\n  <button class=\"btn-icon nav__btn nav__drawer-btn js-nav-drawer-btn\" data-event=\"toggleDrawer\" aria-label=\""
    + alias2(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"navigationDrawer") : stack1), depth0))
    + "\">\n    <div class=\"icon\"></div>\n  </button>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["notify"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias1(((helper = (helper = lookupProperty(helpers,"key") || (data && lookupProperty(data,"key"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"key","hash":{},"data":data,"loc":{"start":{"line":4,"column":26},"end":{"line":4,"column":34}}}) : helper)))
    + "=\""
    + alias1(container.lambda(depth0, depth0))
    + "\" ";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_classes") || (depth0 != null ? lookupProperty(depth0,"_classes") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_classes","hash":{},"data":data,"loc":{"start":{"line":4,"column":122},"end":{"line":4,"column":134}}}) : helper)));
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"notify__icon\">\n          <div class=\"icon"
    + ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_type") : depth0),"prompt",{"name":"equals","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":26},"end":{"line":12,"column":73}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_type") : depth0),"alert",{"name":"equals","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":73},"end":{"line":12,"column":118}}})) != null ? stack1 : "")
    + "\"></div>\n        </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return " is-prompt";
},"8":function(container,depth0,helpers,partials,data) {
    return " is-alert";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"notify__title\" id=\"notify-heading\">\n          <div class=\"notify__title-inner\" "
    + ((stack1 = (lookupProperty(helpers,"a11y_attrs_heading")||(depth0 && lookupProperty(depth0,"a11y_attrs_heading"))||alias2).call(alias1,"notify",{"name":"a11y_attrs_heading","hash":{},"data":data,"loc":{"start":{"line":18,"column":43},"end":{"line":18,"column":76}}})) != null ? stack1 : "")
    + ">\n            "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":19,"column":12},"end":{"line":19,"column":31}}})) != null ? stack1 : "")
    + "\n          </div>\n        </div>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"notify__body\">\n          <div class=\"notify__body-inner\">\n            "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":27,"column":12},"end":{"line":27,"column":30}}})) != null ? stack1 : "")
    + "\n          </div>\n        </div>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"notify__btn-container\">\n          <button class=\"btn-text notify__btn notify__btn-alert js-notify-btn-alert\" aria-label=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"confirmText") || (depth0 != null ? lookupProperty(depth0,"confirmText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"confirmText","hash":{},"data":data,"loc":{"start":{"line":34,"column":97},"end":{"line":34,"column":114}}}) : helper))) != null ? stack1 : "")
    + "\">\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"confirmText") || (depth0 != null ? lookupProperty(depth0,"confirmText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"confirmText","hash":{},"data":data,"loc":{"start":{"line":35,"column":12},"end":{"line":35,"column":29}}}) : helper))) != null ? stack1 : "")
    + "\n          </button>\n        </div>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"notify__btn-container\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_prompts") : depth0),{"name":"each","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":42,"column":10},"end":{"line":46,"column":19}}})) != null ? stack1 : "")
    + "        </div>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <button class=\"btn-text notify__btn notify__btn-prompt js-notify-btn-prompt\" data-event=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_callbackEvent") || (depth0 != null ? lookupProperty(depth0,"_callbackEvent") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_callbackEvent","hash":{},"data":data,"loc":{"start":{"line":43,"column":99},"end":{"line":43,"column":117}}}) : helper)))
    + "\" aria-label=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"promptText") || (depth0 != null ? lookupProperty(depth0,"promptText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"promptText","hash":{},"data":data,"loc":{"start":{"line":43,"column":131},"end":{"line":43,"column":147}}}) : helper))) != null ? stack1 : "")
    + "\">\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"promptText") || (depth0 != null ? lookupProperty(depth0,"promptText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"promptText","hash":{},"data":data,"loc":{"start":{"line":44,"column":12},"end":{"line":44,"column":28}}}) : helper))) != null ? stack1 : "")
    + "\n          </button>\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_type") : depth0),"popup",{"name":"equals","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":55,"column":4},"end":{"line":59,"column":15}}})) != null ? stack1 : "");
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <button class=\"btn-icon notify__btn-icon notify__close-btn js-notify-close-btn\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"closePopup") : stack1), depth0))
    + "\">\n      <div class=\"icon\"></div>\n    </button>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias4(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<div "
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_attributes") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":5},"end":{"line":4,"column":55}}})) != null ? stack1 : "")
    + " class=\"notify__popup notify__popup-type-"
    + alias4(((helper = (helper = lookupProperty(helpers,"_type") || (depth0 != null ? lookupProperty(depth0,"_type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data,"loc":{"start":{"line":4,"column":96},"end":{"line":4,"column":105}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_classes") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":105},"end":{"line":4,"column":141}}})) != null ? stack1 : "")
    + "\">\n  <div class=\"notify__popup-inner\">\n\n    <div class=\"notify__content\">\n      <div class=\"notify__content-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_showIcon") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":8},"end":{"line":14,"column":15}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":8},"end":{"line":22,"column":15}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":8},"end":{"line":30,"column":15}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_type") : depth0),"alert",{"name":"equals","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":8},"end":{"line":38,"column":19}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_type") : depth0),"prompt",{"name":"equals","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":8},"end":{"line":48,"column":19}}})) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n\n"
    + ((stack1 = (lookupProperty(helpers,"all")||(depth0 && lookupProperty(depth0,"all"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_isCancellable") : depth0),(depth0 != null ? lookupProperty(depth0,"_showCloseButton") : depth0),{"name":"all","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":54,"column":4},"end":{"line":60,"column":12}}})) != null ? stack1 : "")
    + "\n  </div>\n\n  "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"a11y_wrap_focus") || (depth0 != null ? lookupProperty(depth0,"a11y_wrap_focus") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"a11y_wrap_focus","hash":{},"data":data,"loc":{"start":{"line":64,"column":2},"end":{"line":64,"column":23}}}) : helper))) != null ? stack1 : "")
    + "\n\n</div>\n\n<div class=\"shadow notify__shadow js-notify-shadow-click\"></div>\n";
},"useData":true});

this["Handlebars"]["templates"]["notifyPush"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"notify-push__title\">\n    <div class=\"notify-push__title-inner\" "
    + ((stack1 = (lookupProperty(helpers,"a11y_attrs_heading")||(depth0 && lookupProperty(depth0,"a11y_attrs_heading"))||alias2).call(alias1,"notify",{"name":"a11y_attrs_heading","hash":{},"data":data,"loc":{"start":{"line":8,"column":42},"end":{"line":8,"column":75}}})) != null ? stack1 : "")
    + ">\n      "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":9,"column":25}}})) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"notify-push__body\">\n    <div class=\"notify-push__body-inner\">\n      "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":17,"column":6},"end":{"line":17,"column":24}}})) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias2(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<div id=\"notify-push-heading\" class=\"notify-push__inner js-notify-push-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":12,"column":9}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":2},"end":{"line":20,"column":9}}})) != null ? stack1 : "")
    + "\n</div>\n\n<button class=\"btn-icon notify-push__close-btn js-notify-push-close-btn\" aria-label=\""
    + alias2(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"closePopup") : stack1), depth0))
    + "\">\n  <div class=\"icon\"></div>\n</button>\n";
},"useData":true});

this["Handlebars"]["templates"]["page"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"page__header\">\n    <div class=\"page__header-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":22,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"subtitle") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":30,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),(depth0 != null ? lookupProperty(depth0,"pageBody") : depth0),{"name":"any","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":6},"end":{"line":42,"column":14}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":6},"end":{"line":50,"column":13}}})) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"page__title\">\n\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibilityState") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":8},"end":{"line":15,"column":21}}})) != null ? stack1 : "")
    + "<div class=\"page__title-inner\" "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibilityState") : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":39},"end":{"line":17,"column":106}}})) != null ? stack1 : "")
    + ">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":18,"column":10},"end":{"line":18,"column":36}}})) != null ? stack1 : "")
    + "\n        </div>\n\n      </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"js-heading\"></div>";
},"5":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"page__subtitle\">\n        <div class=\"page__subtitle-inner\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"subtitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":27,"column":10},"end":{"line":27,"column":32}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"page__body\">\n        <div class=\"page__body-inner\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"pageBody") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":35,"column":10},"end":{"line":39,"column":17}}})) != null ? stack1 : "")
    + "        </div>\n      </div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"pageBody") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":36,"column":10},"end":{"line":36,"column":32}}})) != null ? stack1 : "")
    + "\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":38,"column":10},"end":{"line":38,"column":28}}})) != null ? stack1 : "")
    + "\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"page__instruction\">\n        <div class=\"page__instruction-inner\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":47,"column":10},"end":{"line":47,"column":35}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<div class=\"page__inner\">\n\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),(depth0 != null ? lookupProperty(depth0,"subtitle") : depth0),(depth0 != null ? lookupProperty(depth0,"body") : depth0),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":54,"column":10}}})) != null ? stack1 : "")
    + "\n  <div class=\"article__container\">\n  </div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["shadow"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"shadow\" class=\"shadow js-shadow u-display-none\"></div>\n";
},"useData":true});

this["Handlebars"]["templates"]["beforeafter"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " beforeafter-widget-attribution";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " alt=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_beforeafter") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1), depth0))
    + "\" tabindex=\"0\"";
},"5":function(container,depth0,helpers,partials,data) {
    return " class=\"a11y-ignore\" aria-hidden=\"true\" tabindex=\"-1\"";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " alt=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_beforeafter") : depth0)) != null ? lookupProperty(stack1,"altbefore") : stack1), depth0))
    + "\" tabindex=\"0\"";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"beforeafter-attribution\" tabindex=\"0\">"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_beforeafter") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"beforeafter-bottom-text\" tabindex=\"0\">\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"bottomText") || (depth0 != null ? lookupProperty(depth0,"bottomText") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"bottomText","hash":{},"data":data,"loc":{"start":{"line":17,"column":8},"end":{"line":17,"column":24}}}) : helper))) != null ? stack1 : "")
    + "\n      </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"beforeafter__inner component__inner\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <div class=\"beforeafter__widget component__widget"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_beforeafter") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":53},"end":{"line":3,"column":123}}})) != null ? stack1 : "")
    + "\">\n      <img src=\""
    + alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"_beforeafter") : depth0)) != null ? lookupProperty(stack1,"after") : stack1), depth0))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_beforeafter") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":4,"column":40},"end":{"line":4,"column":172}}})) != null ? stack1 : "")
    + "/>\n      <div class=\"resize\">\n        <img src=\""
    + alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"_beforeafter") : depth0)) != null ? lookupProperty(stack1,"before") : stack1), depth0))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_beforeafter") : depth0)) != null ? lookupProperty(stack1,"altbefore") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":6,"column":43},"end":{"line":6,"column":187}}})) != null ? stack1 : "")
    + "/>\n      </div>\n      <span class=\"aria-label\" tabindex=\"0\" style=\"min-width: 100%;\">Press the right and left arrow keys to reveal the before and after states</span>\n      <div class=\"handle\" tabindex=\"0\"></div>\n      <select class=\"handle\" tabindex=\"0\" aria-label=\"Selection tool\" style=\"display:none;\"></select>\n    </div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_beforeafter") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":4},"end":{"line":14,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"bottomText") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":4},"end":{"line":19,"column":11}}})) != null ? stack1 : "")
    + "</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["chartjs"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"chart__inner component__inner\">\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  <canvas id=\"myChart"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_id") || (depth0 != null ? lookupProperty(depth0,"_id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":3,"column":21},"end":{"line":3,"column":28}}}) : helper)))
    + "\" class=\"chart__widget component__widget\" width=\"640\" height=\"360\" style=\"width: 100%; height: 100%;\"></canvas>\r\n</div>\r\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["accordion"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"accordion__item"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":31},"end":{"line":8,"column":68}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_classes") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":68},"end":{"line":8,"column":104}}})) != null ? stack1 : "")
    + "\" data-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":8,"column":118},"end":{"line":8,"column":128}}}) : helper)))
    + "\">\n\n      <button id=\""
    + alias4(alias5((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":10,"column":29},"end":{"line":10,"column":39}}}) : helper)))
    + "-accordion-button\" class=\"accordion__item-btn js-toggle-item"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isActive") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.program(8, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":10,"column":99},"end":{"line":10,"column":161}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":161},"end":{"line":10,"column":197}}})) != null ? stack1 : "")
    + "\" aria-expanded=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isActive") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.program(14, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":10,"column":214},"end":{"line":10,"column":255}}})) != null ? stack1 : "")
    + "\">\n        <div class=\"accordion__item-btn-inner\">\n\n          <div class=\"accordion__item-icon\">\n            <div class=\"icon\"></div>\n          </div>\n\n          <div class=\"accordion__item-title\">\n            <div class=\"accordion__item-title-inner\">\n              "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":19,"column":14},"end":{"line":19,"column":33}}})) != null ? stack1 : "")
    + "\n            </div>\n          </div>\n\n        </div>\n      </button>\n\n      <div class=\"accordion__item-content\" role=\"region\" aria-labelledby=\""
    + alias4(alias5((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":26,"column":85},"end":{"line":26,"column":95}}}) : helper)))
    + "-accordion-button\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isActive") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":114},"end":{"line":26,"column":161}}})) != null ? stack1 : "")
    + ">\n        <div class=\"accordion__item-content-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":10},"end":{"line":35,"column":17}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),{"name":"if","hash":{},"fn":container.program(20, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":10},"end":{"line":50,"column":17}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n\n    </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " has-image";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_classes") || (depth0 != null ? lookupProperty(depth0,"_classes") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_classes","hash":{},"data":data,"loc":{"start":{"line":8,"column":85},"end":{"line":8,"column":97}}}) : helper)));
},"6":function(container,depth0,helpers,partials,data) {
    return " is-selected is-open";
},"8":function(container,depth0,helpers,partials,data) {
    return " is-closed";
},"10":function(container,depth0,helpers,partials,data) {
    return " is-visited";
},"12":function(container,depth0,helpers,partials,data) {
    return "true";
},"14":function(container,depth0,helpers,partials,data) {
    return "false";
},"16":function(container,depth0,helpers,partials,data) {
    return "style=\"display: block;\"";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"accordion__item-body\">\n            <div class=\"accordion__item-body-inner\">\n              "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":32,"column":14},"end":{"line":32,"column":32}}})) != null ? stack1 : "")
    + "\n            </div>\n          </div>\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"accordion__item-image-container"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":53},"end":{"line":38,"column":104}}})) != null ? stack1 : "")
    + "\">\n            <img class=\"accordion__item-image\" src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.program(25, data, 0),"data":data,"loc":{"start":{"line":39,"column":70},"end":{"line":39,"column":152}}})) != null ? stack1 : "")
    + ">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":41,"column":12},"end":{"line":47,"column":19}}})) != null ? stack1 : "")
    + "\n          </div>\n";
},"21":function(container,depth0,helpers,partials,data) {
    return " has-attribution";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1), depth0))
    + "\"";
},"25":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"27":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"component__attribution accordion__attribution\">\n              <div class=\"component__attribution-inner accordion__attribution-inner\">\n                "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1), depth0)) != null ? stack1 : "")
    + "\n              </div>\n            </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner accordion__inner\">\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n  <div class=\"component__widget accordion__widget\">\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":56,"column":13}}})) != null ? stack1 : "")
    + "\n  </div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["graphic"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " has-attribution";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "aria-label=\""
    + ((stack1 = (lookupProperty(helpers,"compile_a11y_normalize")||(depth0 && lookupProperty(depth0,"compile_a11y_normalize"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),{"name":"compile_a11y_normalize","hash":{},"data":data,"loc":{"start":{"line":9,"column":178},"end":{"line":9,"column":219}}})) != null ? stack1 : "")
    + "\"";
},"5":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"component__attribution graphic__attribution\">\n        <div class=\"component__attribution-inner graphic__attribution-inner\">\n          "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1), depth0)) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner graphic__inner\">\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n  <div class=\"component__widget graphic__widget\">\n\n    <div class=\"graphic__image-container"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":40},"end":{"line":7,"column":91}}})) != null ? stack1 : "")
    + "\">\n\n      <img class=\"graphic__image js-graphic-set-image-src\" src=\""
    + alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\" data-large=\""
    + alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"large") : stack1), depth0))
    + "\" data-small=\""
    + alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"small") : stack1), depth0))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":9,"column":146},"end":{"line":9,"column":253}}})) != null ? stack1 : "")
    + ">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":6},"end":{"line":17,"column":13}}})) != null ? stack1 : "")
    + "\n    </div>\n\n  </div>\n\n</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["mcq"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "radiogroup";
},"3":function(container,depth0,helpers,partials,data) {
    return "group";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "aria-labelledby=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_id") || (depth0 != null ? lookupProperty(depth0,"_id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":1,"column":150},"end":{"line":1,"column":157}}}) : helper)))
    + "-header\"";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " is-disabled"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isInteractionComplete") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":77},"end":{"line":5,"column":192}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " is-complete is-submitted show-user-answer"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":149},"end":{"line":5,"column":185}}})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    return " is-correct";
},"11":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"mcq__item js-mcq-item item-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":8,"column":43},"end":{"line":8,"column":53}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isEnabled") : depths[1]),{"name":"unless","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":53},"end":{"line":8,"column":179}}})) != null ? stack1 : "")
    + "\">\n\n      <input class=\"mcq__item-input js-item-input\" id=\""
    + alias4(alias5((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":10,"column":66},"end":{"line":10,"column":76}}}) : helper)))
    + "-input\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isRadio") : depths[1]),{"name":"if","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":84},"end":{"line":10,"column":133}}})) != null ? stack1 : "")
    + " type=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isRadio") : depths[1]),{"name":"if","hash":{},"fn":container.program(18, data, 0, blockParams, depths),"inverse":container.program(20, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":10,"column":140},"end":{"line":10,"column":187}}})) != null ? stack1 : "")
    + "\""
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isEnabled") : depths[1]),{"name":"unless","hash":{},"fn":container.program(22, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":188},"end":{"line":10,"column":233}}})) != null ? stack1 : "")
    + " aria-label=\""
    + ((stack1 = (lookupProperty(helpers,"a11y_normalize")||(depth0 && lookupProperty(depth0,"a11y_normalize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"text") : depth0),{"name":"a11y_normalize","hash":{},"data":data,"loc":{"start":{"line":10,"column":246},"end":{"line":10,"column":271}}})) != null ? stack1 : "")
    + "\" data-adapt-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":10,"column":291},"end":{"line":10,"column":301}}}) : helper)))
    + "\" />\n\n      <label class=\"mcq__item-label js-item-label"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isEnabled") : depths[1]),{"name":"unless","hash":{},"fn":container.program(24, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":49},"end":{"line":12,"column":97}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isSelected") : depth0),{"name":"if","hash":{},"fn":container.program(26, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":97},"end":{"line":12,"column":135}}})) != null ? stack1 : "")
    + "\" aria-hidden=\"true\" for=\""
    + alias4(alias5((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":12,"column":172},"end":{"line":12,"column":182}}}) : helper)))
    + "-input\" data-adapt-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":12,"column":208},"end":{"line":12,"column":218}}}) : helper)))
    + "\" >\n\n        <div class=\"mcq__item-state\">\n          <div class=\"mcq__item-icon mcq__item-answer-icon"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isRadio") : depths[1]),{"name":"if","hash":{},"fn":container.program(28, data, 0, blockParams, depths),"inverse":container.program(30, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":15,"column":58},"end":{"line":15,"column":113}}})) != null ? stack1 : "")
    + "\">\n            <div class=\"icon\"></div>\n          </div>\n          <div class=\"mcq__item-icon mcq__item-correct-icon\">\n            <div class=\"icon\"></div>\n          </div>\n          <div class=\"mcq__item-icon mcq__item-incorrect-icon\">\n            <div class=\"icon\"></div>\n          </div>\n        </div>\n\n        <div class=\"mcq__item-text\">\n          <div class=\"mcq__item-text-inner\">\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":28,"column":12},"end":{"line":28,"column":22}}}) : helper))) != null ? stack1 : "")
    + "\n          </div>\n        </div>\n\n      </label>\n\n    </div>\n";
},"12":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? lookupProperty(depths[1],"_canShowMarking") : depths[1]),{"name":"if","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":78},"end":{"line":8,"column":168}}})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(14, data, 0),"data":data,"loc":{"start":{"line":8,"column":104},"end":{"line":8,"column":161}}})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    return " is-incorrect";
},"16":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "name=\""
    + container.escapeExpression(container.lambda((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-item\" ";
},"18":function(container,depth0,helpers,partials,data) {
    return "radio";
},"20":function(container,depth0,helpers,partials,data) {
    return "checkbox";
},"22":function(container,depth0,helpers,partials,data) {
    return " disabled";
},"24":function(container,depth0,helpers,partials,data) {
    return " is-disabled";
},"26":function(container,depth0,helpers,partials,data) {
    return " is-selected";
},"28":function(container,depth0,helpers,partials,data) {
    return " is-radio";
},"30":function(container,depth0,helpers,partials,data) {
    return " is-checkbox";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner mcq__inner\" role=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isRadio") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(3, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":1,"column":47},"end":{"line":1,"column":93}}})) != null ? stack1 : "")
    + "\" "
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),(depth0 != null ? lookupProperty(depth0,"body") : depth0),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"any","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":95},"end":{"line":1,"column":173}}})) != null ? stack1 : "")
    + ">\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n  <div class=\"component__widget mcq__widget"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isEnabled") : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":43},"end":{"line":5,"column":203}}})) != null ? stack1 : "")
    + "\">\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":35,"column":13}}})) != null ? stack1 : "")
    + "\n  </div>\n\n  <div class=\"btn__container\"></div>\n\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["narrative"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " narrative__text-controls";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"narrative__content-item"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":43},"end":{"line":11,"column":79}}})) != null ? stack1 : "")
    + "\" data-index=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":11,"column":93},"end":{"line":11,"column":103}}}) : helper)))
    + "\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":10},"end":{"line":19,"column":17}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":10},"end":{"line":27,"column":17}}})) != null ? stack1 : "")
    + "\n        </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return " is-visited";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"narrative__content-title\">\n            <div class=\"narrative__content-title-inner\" "
    + container.escapeExpression((lookupProperty(helpers,"a11y_attrs_heading")||(depth0 && lookupProperty(depth0,"a11y_attrs_heading"))||alias2).call(alias1,"componentItem",{"name":"a11y_attrs_heading","hash":{},"data":data,"loc":{"start":{"line":15,"column":56},"end":{"line":15,"column":94}}}))
    + ">\n              "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":16,"column":14},"end":{"line":16,"column":33}}})) != null ? stack1 : "")
    + "\n            </div>\n          </div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"narrative__content-body\">\n            <div class=\"narrative__content-body-inner\">\n              "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":24,"column":14},"end":{"line":24,"column":32}}})) != null ? stack1 : "")
    + "\n            </div>\n          </div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"narrative__progress js-narrative-progress-click"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":71},"end":{"line":40,"column":107}}})) != null ? stack1 : "")
    + "\" data-index=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":40,"column":121},"end":{"line":40,"column":131}}}) : helper)))
    + "\"></div>\n";
},"12":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <button class=\"narrative__strapline-btn js-narrative-strapline-open-popup"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":58,"column":83},"end":{"line":58,"column":119}}})) != null ? stack1 : "")
    + "\" aria-label=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"strapline") || (depth0 != null ? lookupProperty(depth0,"strapline") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"strapline","hash":{},"data":data,"loc":{"start":{"line":58,"column":133},"end":{"line":58,"column":148}}}) : helper))) != null ? stack1 : "")
    + "\" style=\"width: "
    + alias4(container.lambda((depths[1] != null ? lookupProperty(depths[1],"_itemWidth") : depths[1]), depth0))
    + "%\" data-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":58,"column":196},"end":{"line":58,"column":206}}}) : helper)))
    + "\">\n\n            <div class=\"narrative__strapline-title\">\n              <div class=\"narrative__strapline-title-inner\">\n                "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"strapline") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":62,"column":16},"end":{"line":62,"column":39}}})) != null ? stack1 : "")
    + "\n              </div>\n            </div>\n\n            <div class=\"btn-icon narrative__strapline-icon\">\n              <div class=\"icon\"></div>\n            </div>\n\n            <div class=\"focus-rect\"></div>\n\n          </button>\n";
},"14":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"narrative__slider-image-container"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":85,"column":53},"end":{"line":85,"column":89}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":85,"column":89},"end":{"line":85,"column":140}}})) != null ? stack1 : "")
    + "\" style=\"width: "
    + alias3(alias2((depths[1] != null ? lookupProperty(depths[1],"_itemWidth") : depths[1]), depth0))
    + "%\" data-index=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":85,"column":188},"end":{"line":85,"column":198}}}) : helper)))
    + "\">\n\n          <img class=\"narrative__slider-image js-narrative-swipe\" src=\""
    + alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.program(19, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":87,"column":89},"end":{"line":87,"column":186}}})) != null ? stack1 : "")
    + ">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(21, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":89,"column":10},"end":{"line":95,"column":17}}})) != null ? stack1 : "")
    + "\n        </div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    return " has-attribution";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "aria-label=\""
    + container.escapeExpression((lookupProperty(helpers,"a11y_normalize")||(depth0 && lookupProperty(depth0,"a11y_normalize"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),{"name":"a11y_normalize","hash":{},"data":data,"loc":{"start":{"line":87,"column":121},"end":{"line":87,"column":152}}}))
    + "\"";
},"19":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"component__attribution narrative__attribution\">\n            <div class=\"component__attribution-inner narrative__attribution-inner\">\n              "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1), depth0)) != null ? stack1 : "")
    + "\n            </div>\n          </div>\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"narrative__progress js-narrative-progress-click"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":115,"column":65},"end":{"line":115,"column":101}}})) != null ? stack1 : "")
    + "\" data-index=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":115,"column":115},"end":{"line":115,"column":125}}}) : helper)))
    + "\"></div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression, alias4=container.hooks.helperMissing, alias5="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner narrative__inner\">\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n  <div class=\"component__widget narrative__widget"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_hasNavigationInTextArea") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":49},"end":{"line":5,"column":113}}})) != null ? stack1 : "")
    + "\">\n\n    <div class=\"narrative__content\">\n      <div class=\"narrative__content-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":8},"end":{"line":30,"column":17}}})) != null ? stack1 : "")
    + "\n        <div class=\"narrative__controls-container u-clearfix\">\n\n          <button data-direction=\"left\" class=\"btn-icon narrative__controls narrative__controls-left js-narrative-controls-click\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"previous") : stack1), depth0))
    + "\">\n            <div class=\"icon\"></div>\n          </button>\n\n          <div class=\"narrative__indicators\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":39,"column":12},"end":{"line":41,"column":21}}})) != null ? stack1 : "")
    + "          </div>\n\n          <button data-direction=\"right\" class=\"btn-icon narrative__controls narrative__controls-right js-narrative-controls-click\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"next") : stack1), depth0))
    + "\">\n            <div class=\"icon\"></div>\n          </button>\n        </div>\n\n      </div>\n    </div>\n\n    <div class=\"narrative__strapline\">\n\n      <div class=\"narrative__strapline-header\">\n        <div class=\"narrative__strapline-header-inner u-clearfix\" style=\"width: "
    + alias3(((helper = (helper = lookupProperty(helpers,"_totalWidth") || (depth0 != null ? lookupProperty(depth0,"_totalWidth") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias1,{"name":"_totalWidth","hash":{},"data":data,"loc":{"start":{"line":55,"column":80},"end":{"line":55,"column":95}}}) : helper)))
    + "%\">\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":57,"column":10},"end":{"line":73,"column":19}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"narrative__slide-container\">\n\n      <div class=\"narrative__slider u-clearfix\" style=\"width: "
    + alias3(((helper = (helper = lookupProperty(helpers,"_totalWidth") || (depth0 != null ? lookupProperty(depth0,"_totalWidth") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias1,{"name":"_totalWidth","hash":{},"data":data,"loc":{"start":{"line":82,"column":62},"end":{"line":82,"column":77}}}) : helper)))
    + "%\">\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":84,"column":8},"end":{"line":98,"column":17}}})) != null ? stack1 : "")
    + "\n      </div>\n\n      <button data-direction=\"left\" class=\"btn-icon narrative__controls narrative__controls-left js-narrative-controls-click\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"previous") : stack1), depth0))
    + "\">\n        <div class=\"icon\"></div>\n      </button>\n\n      <button data-direction=\"right\" class=\"btn-icon narrative__controls narrative__controls-right js-narrative-controls-click\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"next") : stack1), depth0))
    + "\">\n        <div class=\"icon\"></div>\n      </button>\n\n    </div>\n\n    <div class=\"narrative__indicators narrative__slide-indicators\">\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(23, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":114,"column":6},"end":{"line":116,"column":15}}})) != null ? stack1 : "")
    + "\n    </div>\n\n  </div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["responsiveIframe"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_scrolling") || (depth0 != null ? lookupProperty(depth0,"_scrolling") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_scrolling","hash":{},"data":data,"loc":{"start":{"line":6,"column":67},"end":{"line":6,"column":81}}}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    return "no";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component-inner responsiveIframe-inner\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  <div class=\"component-widget responsiveIframe-widget\">\n    <div class=\"responsiveIframe-iframe-holder\">\n      <iframe title=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"iframeTitle") || (depth0 != null ? lookupProperty(depth0,"iframeTitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iframeTitle","hash":{},"data":data,"loc":{"start":{"line":6,"column":21},"end":{"line":6,"column":36}}}) : helper)))
    + "\" scrolling=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_scrolling") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":6,"column":49},"end":{"line":6,"column":98}}})) != null ? stack1 : "")
    + "\" class=\"responsiveIframe-iframe\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_source") || (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_source","hash":{},"data":data,"loc":{"start":{"line":6,"column":137},"end":{"line":6,"column":148}}}) : helper)))
    + "\"\n        data-height-large=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"_height") : depth0)) != null ? lookupProperty(stack1,"_large") : stack1), depth0))
    + "\" data-height-medium=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"_height") : depth0)) != null ? lookupProperty(stack1,"_medium") : stack1), depth0))
    + "\" data-height-small=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"_height") : depth0)) != null ? lookupProperty(stack1,"_small") : stack1), depth0))
    + "\"\n        data-width-large=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"_width") : depth0)) != null ? lookupProperty(stack1,"_large") : stack1), depth0))
    + "\" data-width-medium=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"_width") : depth0)) != null ? lookupProperty(stack1,"_medium") : stack1), depth0))
    + "\" data-width-small=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"_width") : depth0)) != null ? lookupProperty(stack1,"_small") : stack1), depth0))
    + "\" allowfullscreen webkitallowfullscreen mozallowfullscreen>\n      </iframe>\n    </div>\n  </div>\n</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["text"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner text__inner\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["graphicwithlink"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " has-attribution";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1), depth0))
    + "\"";
},"5":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"component__attribution graphic__attribution\">\r\n        <div class=\"component__attribution-inner graphic__attribution-inner\">\r\n          "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n        </div>\r\n      </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner graphic__inner\">\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n  <div class=\"component__widget graphic__widget\">\r\n\r\n    <div class=\"graphic__image-container"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":40},"end":{"line":7,"column":91}}})) != null ? stack1 : "")
    + "\">\r\n      <a href=\""
    + alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"url") : stack1), depth0))
    + "\" target=\"_blank\">\r\n        <img class=\"graphic__image js-graphic-set-image-src\" src=\""
    + alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\" data-large=\""
    + alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"large") : stack1), depth0))
    + "\" data-small=\""
    + alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"small") : stack1), depth0))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":9,"column":148},"end":{"line":9,"column":230}}})) != null ? stack1 : "")
    + ">\r\n      </a>\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":6},"end":{"line":18,"column":13}}})) != null ? stack1 : "")
    + "\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["list"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " is-ordered-list";
},"3":function(container,depth0,helpers,partials,data) {
    return " has-columns";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"list__item\" role=\"listitem\">\r\n        <div class=\"list__item-inner\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_imageSrc") : depth0),{"name":"unless","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":14,"column":10},"end":{"line":20,"column":21}}})) != null ? stack1 : "")
    + "\r\n          <div class=\"list__item-content\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":12},"end":{"line":30,"column":19}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":12},"end":{"line":38,"column":19}}})) != null ? stack1 : "")
    + "\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "          <div class=\"list__item-bullet\"></div>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"list__item-image-container\">\r\n            <img class=\"list__item-image\" src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_imageSrc") || (depth0 != null ? lookupProperty(depth0,"_imageSrc") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"_imageSrc","hash":{},"data":data,"loc":{"start":{"line":18,"column":47},"end":{"line":18,"column":60}}}) : helper)))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"alt") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":18,"column":62},"end":{"line":18,"column":128}}})) != null ? stack1 : "")
    + ">\r\n          </div>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "aria-label=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"alt") || (depth0 != null ? lookupProperty(depth0,"alt") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"alt","hash":{},"data":data,"loc":{"start":{"line":18,"column":85},"end":{"line":18,"column":92}}}) : helper)))
    + "\" ";
},"11":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\" ";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"list__item-title"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":40},"end":{"line":25,"column":70}}})) != null ? stack1 : "")
    + "\">\r\n              <div class=\"list__item-title-inner\">\r\n                "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":27,"column":16},"end":{"line":27,"column":35}}})) != null ? stack1 : "")
    + "\r\n              </div>\r\n            </div>\r\n";
},"14":function(container,depth0,helpers,partials,data) {
    return " has-margin";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"list__item-body\">\r\n              <div class=\"list__item-body-inner\">\r\n                "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":35,"column":16},"end":{"line":35,"column":34}}})) != null ? stack1 : "")
    + "\r\n              </div>\r\n            </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner list__inner\">\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n  <div class=\"component__widget list__widget\">\r\n\r\n    <div class=\"list__container"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_orderedList") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":31},"end":{"line":7,"column":74}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"compare")||(depth0 && lookupProperty(depth0,"compare"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"_columns") : depth0),">",1,{"name":"compare","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":74},"end":{"line":7,"column":125}}})) != null ? stack1 : "")
    + "\"\r\n      role=\"list\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":44,"column":15}}})) != null ? stack1 : "")
    + "\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["pageNav-tooltip"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"pagenav__tooltip-text\">\r\n  <div class=\"pagenav__tooltip-text-inner\">\r\n    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"tooltip") || (depth0 != null ? lookupProperty(depth0,"tooltip") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"tooltip","hash":{},"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":3,"column":17}}}) : helper))) != null ? stack1 : "")
    + "\r\n  </div>\r\n</div>\r\n\r\n<div class=\"pagenav__triangle\"></div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["pageNav"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"pageNav-item"),depth0,{"name":"pageNav-item","data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner pagenav__inner\">\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n  <div class=\"component__widget pagenav__widget\">\r\n\r\n    <div class=\"pagenav__tooltip-container\"></div>\r\n\r\n    <div class=\"pagenav__btn-container\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":12,"column":15}}})) != null ? stack1 : "")
    + "    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["pageLevelProgress"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<div class=\"pagelevelprogress__inner\">\n  "
    + ((stack1 = (lookupProperty(helpers,"a11y_aria_label")||(depth0 && lookupProperty(depth0,"a11y_aria_label"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_extensions") : stack1)) != null ? lookupProperty(stack1,"_pageLevelProgress") : stack1)) != null ? lookupProperty(stack1,"pageLevelProgress") : stack1),{"name":"a11y_aria_label","hash":{},"data":data,"loc":{"start":{"line":5,"column":2},"end":{"line":5,"column":81}}})) != null ? stack1 : "")
    + "\n\n  <div role=\"list\" class=\"js-children\">\n  </div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["pageLevelProgressIndicator"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <span class=\"aria-label js-indicator-aria-label\">\n    "
    + container.escapeExpression((lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"ariaLabel") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":10,"column":4},"end":{"line":10,"column":25}}}))
    + "\n  </span>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias4(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<div class=\"pagelevelprogress__indicator-inner\">\n\n  <div class=\"pagelevelprogress__indicator-bar js-indicator-bar\" style=\"width: "
    + alias4(((helper = (helper = lookupProperty(helpers,"percentageComplete") || (depth0 != null ? lookupProperty(depth0,"percentageComplete") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"percentageComplete","hash":{},"data":data,"loc":{"start":{"line":6,"column":79},"end":{"line":6,"column":101}}}) : helper)))
    + "%;\"></div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"ariaLabel") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":2},"end":{"line":12,"column":9}}})) != null ? stack1 : "")
    + "\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["pageLevelProgressItem"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " is-disabled";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"locked") : stack1), depth0))
    + ".";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_extensions") : stack1)) != null ? lookupProperty(stack1,"_pageLevelProgress") : stack1)) != null ? lookupProperty(stack1,"optionalContent") : stack1), depth0))
    + ".";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isComplete") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":4,"column":193},"end":{"line":4,"column":329}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"complete") : stack1), depth0))
    + ".";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"incomplete") : stack1), depth0))
    + ".";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"pagelevelprogress__item-optional\">\n    <div class=\"pagelevelprogress__item-optional-inner\">\n      "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_extensions") : stack1)) != null ? lookupProperty(stack1,"_pageLevelProgress") : stack1)) != null ? lookupProperty(stack1,"optionalContent") : stack1), depth0))
    + "\n    </div>\n  </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<button\n  class=\"pagelevelprogress__item-btn drawer__item-btn"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_isLocked") : depth0),(lookupProperty(helpers,"none")||(depth0 && lookupProperty(depth0,"none"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisible") : depth0),{"name":"none","hash":{},"data":data,"loc":{"start":{"line":2,"column":70},"end":{"line":2,"column":87}}}),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":53},"end":{"line":2,"column":109}}})) != null ? stack1 : "")
    + " js-indicator js-pagelevelprogress-item-click\"\n  data-pagelevelprogress-id=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"_id") || (depth0 != null ? lookupProperty(depth0,"_id") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":3,"column":29},"end":{"line":3,"column":36}}}) : helper)))
    + "\"\n  aria-label=\""
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_isLocked") : depth0),(lookupProperty(helpers,"none")||(depth0 && lookupProperty(depth0,"none"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisible") : depth0),{"name":"none","hash":{},"data":data,"loc":{"start":{"line":4,"column":31},"end":{"line":4,"column":48}}}),{"name":"any","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":14},"end":{"line":4,"column":105}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isOptional") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":4,"column":105},"end":{"line":4,"column":336}}})) != null ? stack1 : "")
    + " "
    + alias3((lookupProperty(helpers,"compile_a11y_normalize")||(depth0 && lookupProperty(depth0,"compile_a11y_normalize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile_a11y_normalize","hash":{},"data":data,"loc":{"start":{"line":4,"column":337},"end":{"line":4,"column":369}}}))
    + "\">\n\n  <div class=\"pagelevelprogress__item-title drawer__item-title\">\n    <div class=\"pagelevelprogress__item-title-inner drawer__item-title-inner\">\n      "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":8,"column":25}}})) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isOptional") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":2},"end":{"line":18,"column":9}}})) != null ? stack1 : "")
    + "\n</button>\n";
},"useData":true});

this["Handlebars"]["templates"]["pageLevelProgressNavigation"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias1(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<span class=\"tooltip\">\n  "
    + alias1(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"progress") : stack1), depth0))
    + "\n</span>\n";
},"useData":true});

this["Handlebars"]["templates"]["trickle-button"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " u-display-none";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "aria-label=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"buttonAriaLabel") || (depth0 != null ? lookupProperty(depth0,"buttonAriaLabel") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"buttonAriaLabel","hash":{},"data":data,"loc":{"start":{"line":5,"column":45},"end":{"line":5,"column":64}}}) : helper)))
    + "\" ";
},"5":function(container,depth0,helpers,partials,data) {
    return " is-disabled";
},"7":function(container,depth0,helpers,partials,data) {
    return " btn-icon";
},"9":function(container,depth0,helpers,partials,data) {
    return " btn-text";
},"11":function(container,depth0,helpers,partials,data) {
    return " aria-disabled=\"true\"";
},"13":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"trickle__btn-icon\">\n      <div class=\"icon\"></div>\n    </div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"trickle__btn-text\">\n      <div class=\"trickle__btn-text-inner js-trickle-btn-text\">\n        "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"buttonText") || (depth0 != null ? lookupProperty(depth0,"buttonText") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"buttonText","hash":{},"data":data,"loc":{"start":{"line":16,"column":8},"end":{"line":16,"column":22}}}) : helper)))
    + "\n      </div>\n    </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"a11y_aria_label")||(depth0 && lookupProperty(depth0,"a11y_aria_label"))||container.hooks.helperMissing).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_extensions") : stack1)) != null ? lookupProperty(stack1,"_trickle") : stack1)) != null ? lookupProperty(stack1,"incompleteContent") : stack1),{"name":"a11y_aria_label","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":69}}})) != null ? stack1 : "")
    + "\n\n<div class=\"trickle__inner js-trickle-btn-container "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_trickle") : depth0)) != null ? lookupProperty(stack1,"_button") : stack1)) != null ? lookupProperty(stack1,"_component") : stack1), depth0))
    + "__inner "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isButtonVisible") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":91},"end":{"line":3,"column":145}}})) != null ? stack1 : "")
    + "\">\n\n  <button "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"buttonAriaLabel") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":10},"end":{"line":5,"column":73}}})) != null ? stack1 : "")
    + "class=\"trickle__btn js-trickle-btn "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isButtonDisabled") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":108},"end":{"line":5,"column":152}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_trickle") : depth0)) != null ? lookupProperty(stack1,"_button") : stack1)) != null ? lookupProperty(stack1,"_hasIcon") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":152},"end":{"line":5,"column":201}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"buttonText") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":201},"end":{"line":5,"column":235}}})) != null ? stack1 : "")
    + "\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isButtonDisabled") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":236},"end":{"line":5,"column":289}}})) != null ? stack1 : "")
    + ">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_trickle") : depth0)) != null ? lookupProperty(stack1,"_button") : stack1)) != null ? lookupProperty(stack1,"_hasIcon") : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":11,"column":11}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"buttonText") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":4},"end":{"line":19,"column":11}}})) != null ? stack1 : "")
    + "\n  </button>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["boxMenu"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"menu__header boxmenu__header\">\n    <div class=\"menu__header-inner boxmenu__header-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":21,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"subtitle") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":6},"end":{"line":29,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":6},"end":{"line":37,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":39,"column":6},"end":{"line":45,"column":13}}})) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"menu__title boxmenu__title\">\n\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibleState") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":8},"end":{"line":14,"column":19}}})) != null ? stack1 : "")
    + "\n        <div class=\"menu__title-inner boxmenu__title-inner\" "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibleState") : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":60},"end":{"line":16,"column":124}}})) != null ? stack1 : "")
    + ">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":17,"column":10},"end":{"line":17,"column":36}}})) != null ? stack1 : "")
    + "\n        </div>\n\n      </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"js-heading\"></div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"menu__subtitle boxmenu__subtitle\">\n        <div class=\"menu__subtitle-inner boxmenu__subtitle-inner\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"subtitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":26,"column":10},"end":{"line":26,"column":32}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"menu__body boxmenu__body\">\n        <div class=\"menu__body-inner boxmenu__body-inner\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":34,"column":10},"end":{"line":34,"column":28}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"menu__instruction boxmenu__instruction\">\n        <div class=\"menu__instruction-inner boxmenu__instruction-inner\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":42,"column":10},"end":{"line":42,"column":35}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n\n<div class=\"menu__inner boxmenu__inner\">\n\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),(depth0 != null ? lookupProperty(depth0,"subtitle") : depth0),(depth0 != null ? lookupProperty(depth0,"body") : depth0),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":2},"end":{"line":49,"column":10}}})) != null ? stack1 : "")
    + "\n  <div class=\"menu__item-container boxmenu__item-container\">\n    <div class=\"menu__item-container-inner boxmenu__item-container-inner js-children\" role=\"list\">\n    </div>\n  </div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["boxMenuGroup"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"menu-group__title boxmenu-group__title\">\n        <div class=\"js-heading\" data-a11y-heading-type=\"menuGroup\"></div>\n\n        <div class=\"menu-group__title-inner boxmenu-group__title-inner accessible-text-block\" aria-hidden=\"true\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":13,"column":10},"end":{"line":13,"column":36}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"menu-group__body boxmenu-group__body\">\n        <div class=\"menu-group__body-inner boxmenu-group__body-inner\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":21,"column":10},"end":{"line":21,"column":28}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"menu-group__instruction boxmenu-group__instruction\">\n        <div class=\"menu-group__instruction-inner boxmenu-group__instruction-inner\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":29,"column":10},"end":{"line":29,"column":35}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n\n<div class=\"menu-group__inner boxmenu-group__inner\">\n\n  <div class=\"menu-group__header boxmenu-group__header\">\n    <div class=\"menu-group__header-inner boxmenu-group__header-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":16,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":6},"end":{"line":24,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":6},"end":{"line":32,"column":13}}})) != null ? stack1 : "")
    + "\n      <div class=\"menu-group__progress boxmenu-group__progress js-menu-item-progress\">\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"menu-group__container boxmenu-group__container\">\n    <div class=\"menu-group__item-container-inner boxmenu-group__item-container-inner js-group-children\" role=\"list\">\n    </div>\n  </div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["boxMenuItem"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"menu-item__image-container boxmenu-item__image-container\">\n    <img class=\"menu-item__image boxmenu-item__image\" src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\" aria-hidden=\"true\">\n  </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"menu-item__title boxmenu-item__title\">\n        <div class=\"js-heading\" data-a11y-heading-type=\"menuItem\"></div>\n\n        <div class=\"menu-item__title-inner boxmenu-item__title-inner\" aria-hidden=\"true\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":19,"column":10},"end":{"line":19,"column":36}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression((lookupProperty(helpers,"a11y_aria_image")||(depth0 && lookupProperty(depth0,"a11y_aria_image"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),{"name":"a11y_aria_image","hash":{},"data":data,"loc":{"start":{"line":24,"column":26},"end":{"line":24,"column":58}}}));
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"menu-item__body boxmenu-item__body\">\n        <div class=\"menu-item__body-inner boxmenu-item__body-inner\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":29,"column":10},"end":{"line":29,"column":28}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"menu-item__duration boxmenu-item__duration\">\n        <div class=\"menu-item__duration-inner boxmenu-item__duration-inner\">\n          "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_menu") : stack1)) != null ? lookupProperty(stack1,"_boxMenu") : stack1)) != null ? lookupProperty(stack1,"durationLabel") : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":10},"end":{"line":37,"column":105}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"duration") || (depth0 != null ? lookupProperty(depth0,"duration") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"duration","hash":{},"data":data,"loc":{"start":{"line":37,"column":106},"end":{"line":37,"column":120}}}) : helper))) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_menu") : stack1)) != null ? lookupProperty(stack1,"_boxMenu") : stack1)) != null ? lookupProperty(stack1,"durationLabel") : stack1), depth0)) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    return " is-visited";
},"14":function(container,depth0,helpers,partials,data) {
    return " is-locked";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"visited") : stack1), depth0));
},"18":function(container,depth0,helpers,partials,data) {
    return " disabled=\"disabled\"";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias4(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n\n<div class=\"menu-item__inner boxmenu-item__inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":2},"end":{"line":9,"column":9}}})) != null ? stack1 : "")
    + "\n  <div class=\"menu-item__details boxmenu-item__details\">\n    <div class=\"menu-item__details-inner boxmenu-item__details-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":6},"end":{"line":22,"column":13}}})) != null ? stack1 : "")
    + "\n      "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":24,"column":65}}})) != null ? stack1 : "")
    + "\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":6},"end":{"line":32,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"duration") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":6},"end":{"line":40,"column":13}}})) != null ? stack1 : "")
    + "\n      <div class=\"menu-item__progress boxmenu-item__progress js-menu-item-progress\">\n      </div>\n\n      <div class=\"menu-item__button-container boxmenu-item__button-container\">\n        <button class=\"btn-text menu-item__button boxmenu-item__button js-btn-click"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":83},"end":{"line":47,"column":119}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isLocked") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":119},"end":{"line":47,"column":153}}})) != null ? stack1 : "")
    + "\" aria-label=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":167},"end":{"line":47,"column":239}}})) != null ? stack1 : "")
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"linkText") || (depth0 != null ? lookupProperty(depth0,"linkText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkText","hash":{},"data":data,"loc":{"start":{"line":47,"column":240},"end":{"line":47,"column":252}}}) : helper)))
    + "\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isLocked") : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":253},"end":{"line":47,"column":297}}})) != null ? stack1 : "")
    + ">\n          "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"linkText") || (depth0 != null ? lookupProperty(depth0,"linkText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkText","hash":{},"data":data,"loc":{"start":{"line":48,"column":10},"end":{"line":48,"column":24}}}) : helper))) != null ? stack1 : "")
    + "\n        </button>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n";
},"useData":true});

return this["Handlebars"];

});