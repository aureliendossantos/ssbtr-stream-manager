<template>
    <div id="app">
        <section class="section">
            <div class="container">
                <h1 class="title is-1">
                    SSBTR
                </h1>

                <div class="columns">
                    <div class="column is-two-thirds">
                        <section class="section is-paddingless">
                            <h2 class="title is-2">
                                Tools
                            </h2>

                            <h3 class="title is-4">
                                Stream & Vods <span class="tag is-danger is-medium">No connection to local server</span>
                            </h3>
                            <div class="tile is-ancestor">
                                <div class="tile is-parent is-7">
                                    <div class="tile is-child notification is-primary">
                                        <b-loading :active="!connectedLocalServer" :is-full-page="false" />
                                        <p class="title">
                                            Manage Stream
                                        </p>
                                        <p class="subtitle">
                                            Manage the stream overlay and scenes
                                        </p>
                                        <div class="content">
                                            Overlay URL: <a href="/overlay.html">{{ url }}overlay.html</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="tile is-parent">
                                    <div class="tile is-child notification is-warning">
                                        <b-loading :active="!connectedLocalServer" :is-full-page="false" />
                                        <p class="title">
                                            Create Vods
                                        </p>
                                        <p class="subtitle">
                                            Create vods
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <h3 class="title is-4">
                                Communication
                            </h3>
                            <div class="tile is-ancestor">
                                <div class="tile is-parent">
                                    <div class="tile is-child notification is-info">
                                        <p class="title">
                                            Facebook Posts
                                        </p>
                                        <p class="subtitle">
                                            Create pre and post weekly messages
                                        </p>
                                    </div>
                                </div>
                                <div class="tile is-parent">
                                    <div class="tile is-child notification is-success">
                                        <p class="title">
                                            Top 8 image
                                        </p>
                                        <p class="subtitle">
                                            Generate a top 8 image
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div class="column">
                        <section class="section is-paddingless">
                            <h2 class="title is-2">
                                Quick Links
                            </h2>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'Index',
        data: () => ({
            url: window.location.href,
            connectedLocalServer: false,
        }),
    };
</script>

<style>
</style>
