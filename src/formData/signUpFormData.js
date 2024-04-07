const signUpFormData = [
    {
    title : "Prénom",
    type : "text",
    size : "w-medium",
    id : "firstName"},
    {
    title : "Nom",
    type : "text",
    size : "w-medium",
    id : "lastName"},
    {
    title : "Addresse email",
    type : "email",
    size : "w-large",
    id : "email"},
    {
    title : "Mot de passe",
    type : "password",
    size : "w-x-large",
    id : "password"},
    {
    title : "Rôle",
    type : "select",
    options : [
        {name:"Client",
        value :"user"},
        {name:"Livreur",
        value :"deliveryman"},
        {name:"Restaurateur",
        value :"restaurant"},
        {name:"Commercial",
        value :"marketing"},
        {name:"Developpeur",
        value :"developer"},
        {name:"Technique",
        value :"technical"}],
    size : "w-medium",
    id : "role"},
    {
    title : "Code parrainage",
    type : "partnerCode",
    size : "w-medium",
    id : "partnerCode"},
]

export default signUpFormData;