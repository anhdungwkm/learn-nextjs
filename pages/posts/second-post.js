import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

import React, { Component } from 'react'
import Layout from '../../components/layout'

const flex = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap'
}
export default class FirstPost extends Component {
  imgs = (k) => {
    return (
      <div key={k}>
        <Image src="/images/200w.webp" alt="pic" height={144} width={144} />
      </div>
    )
  }
  hundres = () => {
    let jsxArr = []
    for (let i = 0; i < 1000; i++) {
      jsxArr.push(this.imgs(i))
    }
    return (
      <div style={flex}>
        {jsxArr}
      </div>
    )
  }
  render() {
    return (
      <Layout>
        <Head>
          <title>1st Post</title>
          <link ref="icon" href="images/giphy.gif" type="image/gif"/>
        </Head>
        <div>
          This is SECOND Post
                <div>
            <Link href="/"><a>Go Home</a></Link>
          </div>
          <div>
            {
              this.hundres()
            }
          </div>
        </div>
      </Layout>
    )
  }
}
