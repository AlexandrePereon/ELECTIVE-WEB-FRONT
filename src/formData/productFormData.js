const productFormData = [
    {
    title : ['ajouter une image à votre article','ajouter une image à votre menu'],
    type : "image",
    id : "image",
    value : null},
    {
    title : ['Nom de votre article','Nom de votre menu'],
    type : "text",
    size : "w-medium",
    id : "name",
    value : null},
    {
    title : ['Description de votre article','Description de votre menu'],
    type : "textarea",
    size : "w-large",
    id : "description",
    value : null},
    {
    title : ['Prix de votre article','Prix de votre menu'],
    type : "number",
    size : "w-small",
    id : "price",
    value : null},
    {
    title : [null ,'Liste des articles'],
    type : "list",
    id : "article",
    value : null}
];

export default productFormData;