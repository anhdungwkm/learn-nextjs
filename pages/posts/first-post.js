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
  pictures = (pics) => {
    pics = pics || []
    const arr = pics.map((p, i) => (
      <div key={i}><Image src={p} alt="pic" height={144} width={250} /></div>
    ))
    return (<div style={flex}>{arr}</div>)
  }
  render() {
    return (
      <Layout>
        <Head>
          <title>1st Post</title>
          <link ref="icon" href="images/giphy.gif" type="image/gif"/>
        </Head>
        <div>
          This is 1st Post
                <div>
            <Link href="/"><a>Go Home</a></Link>
          </div>
          <div>
            {
              this.pictures()
            }
          </div>
        </div>
      </Layout>
    )
  }
}
