<template>
    <main class="main">
              <div class="center">
                  <div class="main__top">
                      <div class="main__top_text"><h1 class="main__top_h1">Let
                              Your
                              Home
                              Be Unique</h1>
                          <p class="main__top_txt">
                              There are many variations of the passages of
                              lorem Ipsum fromavailable, majority.
                          </p>
                          <button class="main__top_button">Get Started</button>
                      </div>
                  </div>
  
                  <div class="main__text1">
                      <h2 class="main__h2">Follow Our Projects</h2>
                      <p class="main__p">It is a long established fact that a
                          reader
                          will be distracted by the of readable content of page
                          lookings at its layouts points.</p>
                  </div>
  
                  <div class="main__catalog">
                      <div class="main__cat main__cat1">
                          <img src="../assets/img/cat1.png" alt="image1">
                          <div class="main__cat_down">
                              <div class="main__down">
                                  <h3 class="main__h3">Modern Kitchan</h3>
                                  <p class="main__link">Decor / Artchitecture</p>
                              </div>
                              <div class="main__btn">
                                  <svg width="70" height="70" viewBox="0 0 70 70"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <circle cx="35" cy="35" r="35"
                                          fill="#F4F0EC" />
                                      <path d="M32 44L40 35L32 26"
                                          stroke="#292F36"
                                          stroke-width="2" stroke-linecap="round"
                                          stroke-linejoin="round" />
                                  </svg>
                              </div>
                          </div>
  
                      </div>
  
                      <div class="main__cat main__cat2">
                          <img src="../assets/img/cat2.png" alt="image2">
                          <div class="main__cat_down">
                              <div class="main__down">
                                  <h3 class="main__h3">Modern Kitchan</h3>
                                  <p class="main__link">Decor / Artchitecture</p>
                              </div>
                              <div class="main__btn">
                                  <svg width="70" height="70" viewBox="0 0 70 70"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <circle cx="35" cy="35" r="35"
                                          fill="#F4F0EC" />
                                      <path d="M32 44L40 35L32 26"
                                          stroke="#292F36"
                                          stroke-width="2" stroke-linecap="round"
                                          stroke-linejoin="round" />
                                  </svg>
                              </div>
                          </div>
  
                      </div>
  
                      <div class="main__cat main__cat3">
                          <img src="../assets/img/cat3.png" alt="image3">
                          <div class="main__cat_down">
                              <div class="main__down">
                                  <h3 class="main__h3">Modern Kitchan</h3>
                                  <p class="main__link">Decor / Artchitecture</p>
                              </div>
                              <div class="main__btn">
                                  <svg width="70" height="70" viewBox="0 0 70 70"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <circle cx="35" cy="35" r="35"
                                          fill="#F4F0EC" />
                                      <path d="M32 44L40 35L32 26"
                                          stroke="#292F36"
                                          stroke-width="2" stroke-linecap="round"
                                          stroke-linejoin="round" />
                                  </svg>
                              </div>
                          </div>
  
                      </div>
  
                      <div class="main__cat main__cat4">
                          <img src="../assets/img/cat4.png" alt="image4">
                          <div class="main__cat_down">
                              <div class="main__down">
                                  <h3 class="main__h3">Modern Kitchan</h3>
                                  <p class="main__link">Decor / Artchitecture</p>
                              </div>
                              <div class="main__btn">
                                  <svg width="70" height="70" viewBox="0 0 70 70"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <circle cx="35" cy="35" r="35"
                                          fill="#F4F0EC" />
                                      <path d="M32 44L40 35L32 26"
                                          stroke="#292F36"
                                          stroke-width="2" stroke-linecap="round"
                                          stroke-linejoin="round" />
                                  </svg>
                              </div>
                          </div>
  
                      </div>
  
                  </div>
  
              </div>
  
              <div class="main__numbers">
                  <div class="main__flex center">
                      <div class="main__number main__number1">
                          <span class="main__span">12</span>
                          <p class="main__link">Years Of Experiance</p>
                      </div>
  
                      <div class="main__number main__number2">
                          <span class="main__span">85</span>
                          <p class="main__link">Success Project</p>
                      </div>
  
                      <div class="main__number main__number3">
                          <span class="main__span">15</span>
                          <p class="main__link">Active Project</p>
                      </div>
  
                      <div class="main__number main__number4">
                          <span class="main__span">95</span>
                          <p class="main__link">Happy CUstomers</p>
                      </div>
                  </div>
  
              </div>
  
              <div class="center">
                  <div class="main__text1 center">
                      <h2 class="main__h2">Articles & News</h2>
                      <p class="main__p">It is a long established fact that a
                          reader
                          will be distracted by the of readable content of a page
                          when
                          lookings at its layouts the points of using.</p>
                  </div>
  
                  <div class="main__bottom app">
                    <div class="main__news" v-for="item in $store.state.NewsList.slice(0,3)" :key="item.id" >                                                          
                      <img v-bind:src="require(`@/assets/img/${item.src}`)" alt="news">                        
                      <h3 class="main__h3">{{ item.name }}</h3>
                      <div class="main__news_bottom">
                              <span>{{ item.dat }}</span>
                              <svg width="52" height="53" viewBox="0 0 52 53"
                                  fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <circle cx="26" cy="26.267" r="26"
                                      fill="#F4F0EC" />
                                  <path
                                      d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813"
                                      stroke="#292F36" stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round" />
                              </svg>
                          </div>
  
                        </div>
                    
                  </div>
              </div>
  
          </main>
  </template>
  
  <script>
  export default {
      name: 'MainComponent',    
  
      data() {
          return {
                  
          };
      },
      methods: {
          
      },
  };
  </script>
  
  <style lang="scss" scoped>

  </style>