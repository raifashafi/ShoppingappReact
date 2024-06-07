import React, { useState } from 'react'
import Navbar from './Navbar'

const View = () => {
    const [data,changeData]= useState(
        [
            {
                "userId": 1,
                "id": 1,
                "title": "quidem molestiae enim"
              },
              {
                "userId": 1,
                "id": 2,
                "title": "sunt qui excepturi placeat culpa"
              },
              {
                "userId": 1,
                "id": 3,
                "title": "omnis laborum odio"
              },
              {
                "userId": 1,
                "id": 4,
                "title": "non esse culpa molestiae omnis sed optio"
              },
              {
                "userId": 1,
                "id": 5,
                "title": "eaque aut omnis a"
              },
              {
                "userId": 1,
                "id": 6,
                "title": "natus impedit quibusdam illo est"
              },
              {
                "userId": 1,
                "id": 7,
                "title": "quibusdam autem aliquid et et quia"
              },
              {
                "userId": 1,
                "id": 8,
                "title": "qui fuga est a eum"
              },
              {
                "userId": 1,
                "id": 9,
                "title": "saepe unde necessitatibus rem"
              },
              {
                "userId": 1,
                "id": 10,
                "title": "distinctio laborum qui"
              },
              {
                "userId": 2,
                "id": 11,
                "title": "quam nostrum impedit mollitia quod et dolor"
              },
              {
                "userId": 2,
                "id": 12,
                "title": "consequatur autem doloribus natus consectetur"
              },
              {
                "userId": 2,
                "id": 13,
                "title": "ab rerum non rerum consequatur ut ea unde"
              },
              {
                "userId": 2,
                "id": 14,
                "title": "ducimus molestias eos animi atque nihil"
              },
              {
                "userId": 2,
                "id": 15,
                "title": "ut pariatur rerum ipsum natus repellendus praesentium"
              },
              {
                "userId": 2,
                "id": 16,
                "title": "voluptatem aut maxime inventore autem magnam atque repellat"
              },
              {
                "userId": 2,
                "id": 17,
                "title": "aut minima voluptatem ut velit"
              },
              {
                "userId": 2,
                "id": 18,
                "title": "nesciunt quia et doloremque"
              },
              {
                "userId": 2,
                "id": 19,
                "title": "velit pariatur quaerat similique libero omnis quia"
              },
              {
                "userId": 2,
                "id": 20,
                "title": "voluptas rerum iure ut enim"
              },
              {
                "userId": 3,
                "id": 21,
                "title": "repudiandae voluptatem optio est consequatur rem in temporibus et"
              },
              {
                "userId": 3,
                "id": 22,
                "title": "et rem non provident vel ut"
              },
              {
                "userId": 3,
                "id": 23,
                "title": "incidunt quisquam hic adipisci sequi"
              },
              {
                "userId": 3,
                "id": 24,
                "title": "dolores ut et facere placeat"
              },
              {
                "userId": 3,
                "id": 25,
                "title": "vero maxime id possimus sunt neque et consequatur"
              },
              {
                "userId": 3,
                "id": 26,
                "title": "quibusdam saepe ipsa vel harum"
              },
              {
                "userId": 3,
                "id": 27,
                "title": "id non nostrum expedita"
              },
              {
                "userId": 3,
                "id": 28,
                "title": "omnis neque exercitationem sed dolor atque maxime aut cum"
              },
              {
                "userId": 3,
                "id": 29,
                "title": "inventore ut quasi magnam itaque est fugit"
              },
              {
                "userId": 3,
                "id": 30,
                "title": "tempora assumenda et similique odit distinctio error"
              },
              {
                "userId": 4,
                "id": 31,
                "title": "adipisci laborum fuga laboriosam"
              },
              {
                "userId": 4,
                "id": 32,
                "title": "reiciendis dolores a ut qui debitis non quo labore"
              },
              {
                "userId": 4,
                "id": 33,
                "title": "iste eos nostrum"
              },
              {
                "userId": 4,
                "id": 34,
                "title": "cumque voluptatibus rerum architecto blanditiis"
              },
              {
                "userId": 4,
                "id": 35,
                "title": "et impedit nisi quae magni necessitatibus sed aut pariatur"
              },
              {
                "userId": 4,
                "id": 36,
                "title": "nihil cupiditate voluptate neque"
              },
              {
                "userId": 4,
                "id": 37,
                "title": "est placeat dicta ut nisi rerum iste"
              },
              {
                "userId": 4,
                "id": 38,
                "title": "unde a sequi id"
              },
              {
                "userId": 4,
                "id": 39,
                "title": "ratione porro illum labore eum aperiam sed"
              },
              {
                "userId": 4,
                "id": 40,
                "title": "voluptas neque et sint aut quo odit"
              },
              {
                "userId": 5,
                "id": 41,
                "title": "ea voluptates maiores eos accusantium officiis tempore mollitia consequatur"
              },
              {
                "userId": 5,
                "id": 42,
                "title": "tenetur explicabo ea"
              },
              {
                "userId": 5,
                "id": 43,
                "title": "aperiam doloremque nihil"
              },
              {
                "userId": 5,
                "id": 44,
                "title": "sapiente cum numquam officia consequatur vel natus quos suscipit"
              },
              {
                "userId": 5,
                "id": 45,
                "title": "tenetur quos ea unde est enim corrupti qui"
              },
              {
                "userId": 5,
                "id": 46,
                "title": "molestiae voluptate non"
              },
              {
                "userId": 5,
                "id": 47,
                "title": "temporibus molestiae aut"
              },
              {
                "userId": 5,
                "id": 48,
                "title": "modi consequatur culpa aut quam soluta alias perspiciatis laudantium"
              },
              {
                "userId": 5,
                "id": 49,
                "title": "ut aut vero repudiandae voluptas ullam voluptas at consequatur"
              },
              {
                "userId": 5,
                "id": 50,
                "title": "sed qui sed quas sit ducimus dolor"
              },
              {
                "userId": 6,
                "id": 51,
                "title": "odit laboriosam sint quia cupiditate animi quis"
              },
              {
                "userId": 6,
                "id": 52,
                "title": "necessitatibus quas et sunt at voluptatem"
              },
              {
                "userId": 6,
                "id": 53,
                "title": "est vel sequi voluptatem nemo quam molestiae modi enim"
              },
              {
                "userId": 6,
                "id": 54,
                "title": "aut non illo amet perferendis"
              },
              {
                "userId": 6,
                "id": 55,
                "title": "qui culpa itaque omnis in nesciunt architecto error"
              },
              {
                "userId": 6,
                "id": 56,
                "title": "omnis qui maiores tempora officiis omnis rerum sed repellat"
              },
              {
                "userId": 6,
                "id": 57,
                "title": "libero excepturi voluptatem est architecto quae voluptatum officia tempora"
              },
              {
                "userId": 6,
                "id": 58,
                "title": "nulla illo consequatur aspernatur veritatis aut error delectus et"
              },
              {
                "userId": 6,
                "id": 59,
                "title": "eligendi similique provident nihil"
              },
              {
                "userId": 6,
                "id": 60,
                "title": "omnis mollitia sunt aliquid eum consequatur fugit minus laudantium"
              },
              {
                "userId": 7,
                "id": 61,
                "title": "delectus iusto et"
              },
              {
                "userId": 7,
                "id": 62,
                "title": "eos ea non recusandae iste ut quasi"
              },
              {
                "userId": 7,
                "id": 63,
                "title": "velit est quam"
              },
              {
                "userId": 7,
                "id": 64,
                "title": "autem voluptatem amet iure quae"
              },
              {
                "userId": 7,
                "id": 65,
                "title": "voluptates delectus iure iste qui"
              },
              {
                "userId": 7,
                "id": 66,
                "title": "velit sed quia dolor dolores delectus"
              },
              {
                "userId": 7,
                "id": 67,
                "title": "ad voluptas nostrum et nihil"
              },
              {
                "userId": 7,
                "id": 68,
                "title": "qui quasi nihil aut voluptatum sit dolore minima"
              },
              {
                "userId": 7,
                "id": 69,
                "title": "qui aut est"
              },
              {
                "userId": 7,
                "id": 70,
                "title": "et deleniti unde"
              },
              {
                "userId": 8,
                "id": 71,
                "title": "et vel corporis"
              },
              {
                "userId": 8,
                "id": 72,
                "title": "unde exercitationem ut"
              },
              {
                "userId": 8,
                "id": 73,
                "title": "quos omnis officia"
              },
              {
                "userId": 8,
                "id": 74,
                "title": "quia est eius vitae dolor"
              },
              {
                "userId": 8,
                "id": 75,
                "title": "aut quia expedita non"
              },
              {
                "userId": 8,
                "id": 76,
                "title": "dolorem magnam facere itaque ut reprehenderit tenetur corrupti"
              },
              {
                "userId": 8,
                "id": 77,
                "title": "cupiditate sapiente maiores iusto ducimus cum excepturi veritatis quia"
              },
              {
                "userId": 8,
                "id": 78,
                "title": "est minima eius possimus ea ratione velit et"
              },
              {
                "userId": 8,
                "id": 79,
                "title": "ipsa quae voluptas natus ut suscipit soluta quia quidem"
              },
              {
                "userId": 8,
                "id": 80,
                "title": "id nihil reprehenderit"
              },
              {
                "userId": 9,
                "id": 81,
                "title": "quibusdam sapiente et"
              },
              {
                "userId": 9,
                "id": 82,
                "title": "recusandae consequatur vel amet unde"
              },
              {
                "userId": 9,
                "id": 83,
                "title": "aperiam odio fugiat"
              },
              {
                "userId": 9,
                "id": 84,
                "title": "est et at eos expedita"
              },
              {
                "userId": 9,
                "id": 85,
                "title": "qui voluptatem consequatur aut ab quis temporibus praesentium"
              },
              {
                "userId": 9,
                "id": 86,
                "title": "eligendi mollitia alias aspernatur vel ut iusto"
              },
              {
                "userId": 9,
                "id": 87,
                "title": "aut aut architecto"
              },
              {
                "userId": 9,
                "id": 88,
                "title": "quas perspiciatis optio"
              },
              {
                "userId": 9,
                "id": 89,
                "title": "sit optio id voluptatem est eum et"
              },
              {
                "userId": 9,
                "id": 90,
                "title": "est vel dignissimos"
              },
              {
                "userId": 10,
                "id": 91,
                "title": "repellendus praesentium debitis officiis"
              },
              {
                "userId": 10,
                "id": 92,
                "title": "incidunt et et eligendi assumenda soluta quia recusandae"
              },
              {
                "userId": 10,
                "id": 93,
                "title": "nisi qui dolores perspiciatis"
              },
              {
                "userId": 10,
                "id": 94,
                "title": "quisquam a dolores et earum vitae"
              },
              {
                "userId": 10,
                "id": 95,
                "title": "consectetur vel rerum qui aperiam modi eos aspernatur ipsa"
              },
              {
                "userId": 10,
                "id": 96,
                "title": "unde et ut molestiae est molestias voluptatem sint"
              },
              {
                "userId": 10,
                "id": 97,
                "title": "est quod aut"
              },
              {
                "userId": 10,
                "id": 98,
                "title": "omnis quia possimus nesciunt deleniti assumenda sed autem"
              },
              {
                "userId": 10,
                "id": 99,
                "title": "consectetur ut id impedit dolores sit ad ex aut"
              },
              {
                "userId": 10,
                "id": 100,
                "title": "enim repellat iste"
              }
        ]



    )
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                          {data.map(
                            (value,index)=>{
                                return   <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                <div class="card" style="width: 18rem;">
                                    <img src="  data:image/jpeg;base64,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" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{value.userId}</h5>
                                        <p class="card-text">id:{value.id}</p>
                                        <p class="card-text">title:{value.title}</p>
                                        <a href="#" class="btn btn-primary">click to see</a>
                                    </div>
                                </div>
                            </div>
                            }
                          )

                          }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View