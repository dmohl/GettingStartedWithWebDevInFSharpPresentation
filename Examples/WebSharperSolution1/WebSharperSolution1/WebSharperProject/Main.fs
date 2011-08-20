namespace WebSharperProject

open IntelliFactory.WebSharper
open IntelliFactory.WebSharper.Html
open IntelliFactory.WebSharper.Formlet

module ContactForms =

    type BasicInfo = 
        {
            Name : string
            Age : int 
        }

    type Address = 
        { 
            Street : string
            City : string
            Country : string 
        }

    type Contact =
        | PhoneContact of string
        | AddressContact of Address

    [<JavaScript>]
    let input (label: string) (err: string) = 
        Controls.Input ""
        |> Validator.IsNotEmpty err
        |> Enhance.WithValidationIcon
        |> Enhance.WithTextLabel label

    [<JavaScript>]
    let inputInt (label: string) (err: string) = 
        Controls.Input ""
        |> Validator.IsInt err
        |> Enhance.WithValidationIcon
        |> Enhance.WithTextLabel label
        |> Formlet.Map int

    [<JavaScript>]
    let BasicInfoForm : Formlet<BasicInfo> =
        Formlet.Yield (fun name age -> { Name = name; Age = age })
        <*> input "Name" "Please enter your name"
        <*> inputInt "Age" "Please enter a valid age"

    [<JavaScript>]
    let ContactInfoForm =
        let phone = 
            input "Phone" "Empty phone number not allowed"
            |> Formlet.Map PhoneContact
        let address =
            Formlet.Yield (fun str cty ctry ->
                AddressContact {
                    Street = str
                    City = cty
                    Country = ctry 
                })
            <*> input "Street" "Empty street not allowed"
            <*> input "City" "Empty city not allowed"
            <*> input "Country" "Empty country not allowed"
        Formlet.Do {
            let! via = 
                [
                    "Phone", phone
                    "Address", address
                ]
                |> Controls.Select 0
            return! via
        }

    [<JavaScript>]
    let SignupSequence =
        let infoForm =
            BasicInfoForm
            |> Enhance.WithSubmitAndResetButtons
            |> Enhance.WithCustomFormContainer {
                 Enhance.FormContainerConfiguration.Default with
                    Header = 
                        "Step 1 - Your name and age" 
                        |> Enhance.FormPart.Text 
                        |> Some
                    Description = 
                        "Please enter your name and age below." 
                        |> Enhance.FormPart.Text 
                        |> Some
               }
        let contactForm =
            ContactInfoForm
            |> Enhance.WithSubmitAndResetButtons
            |> Enhance.WithCustomFormContainer {
                 Enhance.FormContainerConfiguration.Default with
                    Header = 
                        "Step 2 - Your preferred contact information" 
                        |> Enhance.FormPart.Text 
                        |> Some
                    Description = 
                        "Please enter your phone number or your address below." 
                        |> Enhance.FormPart.Text 
                        |> Some 
               }
        let proc info contact () = 
            let result =
                match contact with
                | AddressContact address ->
                    "the address: " + address.Street + ", " +
                    address.City + ", " + address.Country
                | PhoneContact phone ->
                    "the phone number: " + phone
            FieldSet [
                Legend [Text "Sign-up summary"]
                P ["Hi " + info.Name + "!" |> Text]
                P ["You are " + string info.Age + " years old" |> Text]
                P ["Your preferred contact method is via " + result |> Text]
            ]
        let flow =
            Flowlet.Do {
                let! i = infoForm
                let! c = contactForm
                return! Formlet.OfElement (proc i c)
            }
        Div [H1 [Text "Sign up today!"]] -< [flow.BuildForm()]

[<JavaScriptType>]
type SignupSequence() = 
    inherit Web.Control()

    [<JavaScript>]
    override this.Body = ContactForms.SignupSequence

