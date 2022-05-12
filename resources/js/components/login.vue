<template>
    <div
        class="offcanvas bg offcanvas-end p-2"
        tabindex="1"
        id="offcanvasLogin"
        aria-labelledby="offcanvasLoginLabel"
    >
        <div class="offcanvas-header border-bottom-white align-items-center">
            <h5 id="offcanvasLoginLabel" class="color-white m-0">Mi cuenta</h5>
            <div>
                <img :src="publicPath + '/svg/perfil.svg'" height="20px" />
                <a class="btn" data-bs-dismiss="offcanvas" aria-label="Close"
                    ><img
                        class="cerrar-hover"
                        :src="publicPath + '/svg/cerrar.svg'"
                        height="20px"
                /></a>
            </div>
        </div>
    
    </div>
</template>