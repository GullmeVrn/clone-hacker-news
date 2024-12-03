<template>
    <div class="bg-accented text-black flex items-center p-0.5 h-6">
        <Link href="/" class="block border border-white">
            <svg viewBox="4 4 188 188" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                <path d="m4 4h188v188h-188z" fill="#f60" />
                <path
                    d="m73.2521756 45.01 22.7478244 47.39130083 22.7478244-47.39130083h19.56569631l-34.32352071
                    64.48661468v41.49338532h-15.98v-41.49338532l-34.32352071-64.48661468z"
                    fill="#fff"
                />
            </svg>
        </Link>

        <Link href="/" class="font-bold text-sm ms-1.5">Hacker News</Link>

        <nav>
            <ul
                class="flex font-medium items-center text-xs space-x-1.5 divide-x divide-black *:ps-1.5"
            >
                <li>
                    <a href="#">new</a>
                </li>
                <li>
                    <a href="#">past</a>
                </li>
                <li>
                    <a href="#">comments</a>
                </li>
                <li>
                    <a href="#">ask</a>
                </li>
                <li>
                    <a href="#">show</a>
                </li>
                <li>
                    <a href="#">jobs</a>
                </li>
                <li>
                    <a href="#" rel="nofollow">submit</a>
                </li>
            </ul>
        </nav>

        <p class="ms-auto text-xs">
            <a href="#">login</a>
        </p>
    </div>
</template>
