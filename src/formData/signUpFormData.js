const signUpFormData = [
    {
    title : "Prénom",
    type : "text",
    size : "w-medium",
    id : "firstname"},
    {
    title : "Nom",
    type : "text",
    size : "w-medium",
    id : "lastname"},
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
        {name:"Client",
        value :"technical"}],
    size : "w-medium",
    id : "role"},
]

export default signUpFormData;