function show()
{
    const header=document.querySelector(".header");
    const menu=document.querySelector(".close");
    const sidebar=document.querySelector(".sidebar");
    const container=document.querySelector(".countainer");
    if(menu.style.display==="block")
        {
            menu.style.display="none";
            sidebar.style.display="block";
            header.style.position="relative";
            // container.style.opacity = "0.2";
            // sidebar.style.opacity="1";
        }else
        {
            menu.style.display="block";
            sidebar.style.display="none";
        }
}
function hide()
{
    const menu=document.querySelector(".close");
    const sidebar=document.querySelector(".sidebar");
    if(sidebar.style.display==="block")
        {
            sidebar.style.display="none";
            menu.style.display="block";
            // container.style.opacity = "1";
            header.style.position = "static";

        }else
        {
            sidebar.style.display="block";
            menu.style.display="none";
        }
}