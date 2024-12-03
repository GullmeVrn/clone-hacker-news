<template>
    <div
        class="border-t-2 flex flex-col gap-3.5 justify-center items-center border-accented bg-elevated h-24"
    >
        <nav class="content-center">
            <ul class="flex gap-x-1.5 divide-x divide-black text-black text-2xs *:ps-1.5">
                <li><a href="#">Guidelines</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Lists</a></li>
                <li><a href="#">API</a></li>
                <li><a href="#">Security</a></li>
                <li><a href="#">Legal</a></li>
                <li><a href="#">Apply to YC</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>

        <form action="" method="get">
            <label for="search" class="text-sm text-dimmed">Search:</label>
            <input id="search" name="search" type="search" />
        </form>
    </div>
</template>
