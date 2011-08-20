// p2d925e379dd8c109

if (typeof WebSharperProject$ == "undefined")
{
  WebSharperProject$ = {};
}

WebSharperProject$.$SignupSequence =
function ()
{};

(WebSharperProject$.$SignupSequence).prototype = new W$.$Control();

((WebSharperProject$.$SignupSequence).prototype).get_Body =
function (unitVar1)
{
  var _this = this;
  return (((WebSharperProject$.ContactForms$).SignupSequence).get)();
};

if (typeof WebSharperProject$.ContactForms$ == "undefined")
{
  WebSharperProject$.ContactForms$ = {};
}

(WebSharperProject$.ContactForms$).input =
function (label, err)
{
  return (function (flet)
          {
            return ((((IntelliFactory$.WebSharper$).Formlet$).Enhance$).WithTextLabel)(
                   label, flet);
          })(
         (function (formlet)
          {
            return ((((IntelliFactory$.WebSharper$).Formlet$).Enhance$).WithValidationIcon)(
                   formlet);
          })(
         (((((IntelliFactory$.WebSharper$).Formlet$).Validator$).IsNotEmpty)(err
          ))(((((IntelliFactory$.WebSharper$).Formlet$).Controls$).Input)(""))));
};

(WebSharperProject$.ContactForms$).inputInt =
function (label, err)
{
  var f = function (value)
          {
            return parseInt(value);
          };
  return (function (flet)
          {
            return ((((IntelliFactory$.WebSharper$).Formlet$).Formlet$).Map)(
                   f, flet);
          })(
         (function (flet)
          {
            return ((((IntelliFactory$.WebSharper$).Formlet$).Enhance$).WithTextLabel)(
                   label, flet);
          })(
         (function (formlet)
          {
            return ((((IntelliFactory$.WebSharper$).Formlet$).Enhance$).WithValidationIcon)(
                   formlet);
          })(
         (((((IntelliFactory$.WebSharper$).Formlet$).Validator$).IsInt)(err))(
         ((((IntelliFactory$.WebSharper$).Formlet$).Controls$).Input)("")))));
};

(WebSharperProject$.ContactForms$).SignupSequence =
Delay(
function (unitVar0)
{
  var inputRecord =
      (((((IntelliFactory$.WebSharper$).Formlet$).Enhance$).FormContainerConfiguration$).get_Default)(
      );
  var Description = (function (arg0)
                     {
                       return{
                               $: 1,
                               $0: arg0
                             };
                     })((function (arg0)
                         {
                           return{
                                   $: 0,
                                   $0: arg0
                                 };
                         })("Please enter your name and age below."));
  var fc ={
            Header: (function (arg0)
                     {
                       return{
                               $: 1,
                               $0: arg0
                             };
                     })((function (arg0)
                         {
                           return{
                                   $: 0,
                                   $0: arg0
                                 };
                         })("Step 1 - Your name and age")),
            Padding: inputRecord.Padding,
            Description: Description,
            BackgroundColor: inputRecord.BackgroundColor,
            BorderColor: inputRecord.BorderColor,
            CssClass: inputRecord.CssClass,
            Style: inputRecord.Style
          };
  var infoForm =
      (function (formlet)
       {
         return ((((IntelliFactory$.WebSharper$).Formlet$).Enhance$).WithCustomFormContainer)(
                fc, formlet);
       })(
      (function (formlet)
       {
         return ((((IntelliFactory$.WebSharper$).Formlet$).Enhance$).WithSubmitAndResetButtons)(
                formlet);
       })((((WebSharperProject$.ContactForms$).BasicInfoForm).get)()));
  var inputRecord_1 =
      (((((IntelliFactory$.WebSharper$).Formlet$).Enhance$).FormContainerConfiguration$).get_Default)(
      );
  var Description_1 =
      (function (arg0)
       {
         return{
                 $: 1,
                 $0: arg0
               };
       })((function (arg0)
           {
             return{
                     $: 0,
                     $0: arg0
                   };
           })("Please enter your phone number or your address below."));
  var fc_1 ={
              Header: (function (arg0)
                       {
                         return{
                                 $: 1,
                                 $0: arg0
                               };
                       })((function (arg0)
                           {
                             return{
                                     $: 0,
                                     $0: arg0
                                   };
                           })("Step 2 - Your preferred contact information")),
              Padding: inputRecord_1.Padding,
              Description: Description_1,
              BackgroundColor: inputRecord_1.BackgroundColor,
              BorderColor: inputRecord_1.BorderColor,
              CssClass: inputRecord_1.CssClass,
              Style: inputRecord_1.Style
            };
  var contactForm =
      (function (formlet)
       {
         return ((((IntelliFactory$.WebSharper$).Formlet$).Enhance$).WithCustomFormContainer)(
                fc_1, formlet);
       })(
      (function (formlet)
       {
         return ((((IntelliFactory$.WebSharper$).Formlet$).Enhance$).WithSubmitAndResetButtons)(
                formlet);
       })((((WebSharperProject$.ContactForms$).ContactInfoForm).get)()));
  var proc =
      function (info)
      {
        return function (contact)
               {
                 return function (unitVar2)
                        {
                          var __1;
                          if (contact.$ == 0)
                          {
                            var phone = contact.$0;
                            __1 = "the phone number: " + phone;
                          }
                          else
                          {
                            var address = contact.$0;
                            __1 =
                            (((("the address: " + address.Street) + ", ") +
                              address.City) + ", ") + address.Country;
                          }
                          var result = __1;
                          var x_1 =
                              new W$.$List({
                                             $: 1,
                                             $0:
                                             ((W$.Html).text)("Sign-up summary"),
                                             $1: new W$.$List({
                                                                $: 0
                                                              })
                                           });
                          var body = x_1;
                          var name = "legend";
                          var x_2 =
                              new W$.$List({
                                             $: 1,
                                             $0:
                                             (function (data)
                                              {
                                                return ((W$.Html).text)(data);
                                              })(("Hi " + info.Name) + "!"),
                                             $1: new W$.$List({
                                                                $: 0
                                                              })
                                           });
                          var body_1 = x_2;
                          var name_1 = "p";
                          var x_4 = info.Age;
                          var x_3 =
                              new W$.$List({
                                             $: 1,
                                             $0:
                                             (function (data)
                                              {
                                                return ((W$.Html).text)(data);
                                              })(
                                             ("You are " + (x_4.toString)()) +
                                             " years old"),
                                             $1: new W$.$List({
                                                                $: 0
                                                              })
                                           });
                          var body_2 = x_3;
                          var name_2 = "p";
                          var x_5 =
                              new W$.$List({
                                             $: 1,
                                             $0:
                                             (function (data)
                                              {
                                                return ((W$.Html).text)(data);
                                              })(
                                             "Your preferred contact method is via "
                                             + result),
                                             $1: new W$.$List({
                                                                $: 0
                                                              })
                                           });
                          var body_3 = x_5;
                          var name_3 = "p";
                          var x =
                              new W$.$List({
                                             $: 1,
                                             $0: ((W$.Html).Tag)(name, body),
                                             $1:
                                             new W$.$List({
                                                            $: 1,
                                                            $0:
                                                            ((W$.Html).Tag)(
                                                            name_1, body_1),
                                                            $1:
                                                            new W$.$List({
                                                                           $: 1,
                                                                           $0:
                                                                           ((W$.Html).Tag)(
                                                                           name_2,
                                                                           body_2
                                                                           ),
                                                                           $1:
                                                                           new W$.$List({
                                                                                          $:
                                                                                          1,
                                                                                          $0:
                                                                                          ((W$.Html).Tag)(
                                                                                          name_3,
                                                                                          body_3
                                                                                          ),
                                                                                          $1:
                                                                                          new W$.$List({
                                                                                                         $:
                                                                                                         0
                                                                                                       })
                                                                                        })
                                                                         })
                                                          })
                                           });
                          var body_4 = x;
                          var name_4 = "fieldset";
                          return ((W$.Html).Tag)(name_4, body_4);
                        };
               };
      };
  var flow =
      (function (builder_)
       {
         return (builder_.Bind)(
                infoForm,
                function (_arg3)
                {
                  var i = _arg3;
                  return (builder_.Bind)(
                         contactForm,
                         function (_arg2)
                         {
                           var c = _arg2;
                           return (builder_.ReturnFrom)(
                                  ((((IntelliFactory$.WebSharper$).Formlet$).Formlet$).OfElement)(
                                  (proc(i))(c)));
                         });
                });
       })((((((IntelliFactory$.WebSharper$).Formlet$).Flowlet$).Do).get)());
  var x_7 = new W$.$List({
                           $: 1,
                           $0: ((W$.Html).text)("Sign up today!"),
                           $1: new W$.$List({
                                              $: 0
                                            })
                         });
  var body_5 = x_7;
  var name_5 = "h1";
  var x_6 = new W$.$List({
                           $: 1,
                           $0: ((W$.Html).Tag)(name_5, body_5),
                           $1: new W$.$List({
                                              $: 0
                                            })
                         });
  var body_6 = x_6;
  var name_6 = "div";
  return ((W$.Html).append)(
         ((W$.Html).Tag)(name_6, body_6),
         new W$.$List({
                        $: 1,
                        $0: (flow.BuildForm)(undefined),
                        $1: new W$.$List({
                                           $: 0
                                         })
                      }));
});

(WebSharperProject$.ContactForms$).BasicInfoForm =
Delay(
function (unitVar0)
{
  return ((((IntelliFactory$.WebSharper$).Formlet$).Operators$).op_LessMultiplyGreater)(
         ((((IntelliFactory$.WebSharper$).Formlet$).Operators$).op_LessMultiplyGreater)(
         ((((IntelliFactory$.WebSharper$).Formlet$).Formlet$).Yield)(
         function (name)
         {
           return function (age)
                  {
                    return{
                            Name: name,
                            Age: age
                          };
                  };
         }),
         ((WebSharperProject$.ContactForms$).input)(
         "Name", "Please enter your name")),
         ((WebSharperProject$.ContactForms$).inputInt)(
         "Age", "Please enter a valid age"));
});

(WebSharperProject$.ContactForms$).ContactInfoForm =
Delay(
function (unitVar0)
{
  var f = function (arg0)
          {
            return{
                    $: 0,
                    $0: arg0
                  };
          };
  var phone =
      (function (flet)
       {
         return ((((IntelliFactory$.WebSharper$).Formlet$).Formlet$).Map)(
                f, flet);
       })(
      ((WebSharperProject$.ContactForms$).input)(
      "Phone", "Empty phone number not allowed"));
  var address =
      ((((IntelliFactory$.WebSharper$).Formlet$).Operators$).op_LessMultiplyGreater)(
      ((((IntelliFactory$.WebSharper$).Formlet$).Operators$).op_LessMultiplyGreater)(
      ((((IntelliFactory$.WebSharper$).Formlet$).Operators$).op_LessMultiplyGreater)(
      ((((IntelliFactory$.WebSharper$).Formlet$).Formlet$).Yield)(
      function (str)
      {
        return function (cty)
               {
                 return function (ctry)
                        {
                          return{
                                  $: 1,
                                  $0:{
                                       Street: str,
                                       City: cty,
                                       Country: ctry
                                     }
                                };
                        };
               };
      }),
      ((WebSharperProject$.ContactForms$).input)(
      "Street", "Empty street not allowed")),
      ((WebSharperProject$.ContactForms$).input)(
      "City", "Empty city not allowed")),
      ((WebSharperProject$.ContactForms$).input)(
      "Country", "Empty country not allowed"));
  return (function (builder_)
          {
            var def = 0;
            return (builder_.Bind)(
                   (function (vls)
                    {
                      return ((((IntelliFactory$.WebSharper$).Formlet$).Controls$).Select)(
                             def, vls);
                    })(
                   new W$.$List({
                                  $: 1,
                                  $0: ["Phone", phone],
                                  $1: new W$.$List({
                                                     $: 1,
                                                     $0: ["Address", address],
                                                     $1: new W$.$List({
                                                                        $: 0
                                                                      })
                                                   })
                                })), function (_arg1)
                                     {
                                       var via = _arg1;
                                       return (builder_.ReturnFrom)(via);
                                     });
          })((((((IntelliFactory$.WebSharper$).Formlet$).Formlet$).Do).get)());
});

(((WebSharperProject$.ContactForms$).SignupSequence).get)();
(((WebSharperProject$.ContactForms$).BasicInfoForm).get)();
(((WebSharperProject$.ContactForms$).ContactInfoForm).get)();
((((W$.Registry).Types).get)()).SignupSequence_n2bfad5153ff24434 =
WebSharperProject$.$SignupSequence;
((WebSharperProject$.$SignupSequence).prototype).$$IComponent_p4642b924f95be4a6__IComponent
= 1;
((WebSharperProject$.$SignupSequence).prototype).$$IDisposable_p1a5dece2430d1c7__IDisposable
= 1;
((WebSharperProject$.$SignupSequence).prototype).$$IParserAccessor_p23114829d1dcea79__IParserAccessor
= 1;
((WebSharperProject$.$SignupSequence).prototype).$$IUrlResolutionService_p3d8fd69f2d090451__IUrlResolutionService
= 1;
((WebSharperProject$.$SignupSequence).prototype).$$IDataBindingsAccessor_naf467a036212eec__IDataBindingsAccessor
= 1;
((WebSharperProject$.$SignupSequence).prototype).$$IControlBuilderAccessor_p12767bfcffc685b4__IControlBuilderAccessor
= 1;
((WebSharperProject$.$SignupSequence).prototype).$$IControlDesignerAccessor_p21c9dfd732eeac7e__IControlDesignerAccessor
= 1;
((WebSharperProject$.$SignupSequence).prototype).$$IExpressionsAccessor_p63d69e724f7de2af__IExpressionsAccessor
= 1;
((WebSharperProject$.$SignupSequence).prototype).$$IWidget_p4036373d8372c14d__IWidget
= 1;
((WebSharperProject$.$SignupSequence).prototype).$$INode_p5129303de1c6d8ef__INode
= 1;
