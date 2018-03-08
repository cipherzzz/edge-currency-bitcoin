// @flow
import type { AbcCurrencyInfo } from 'edge-core-js'

export const decredTestnetInfo: AbcCurrencyInfo = {
  // Basic currency information:
  currencyCode: 'DCR',
  currencyName: 'Decred',
  pluginName: 'decred',
  denominations: [
    { name: 'DCR', multiplier: '100000000', symbol: 'D' },
    { name: 'mDCR', multiplier: '100000', symbol: 'mD' },
    { name: 'atoms', multiplier: '100', symbol: 'a' }
  ],
  walletTypes: ['wallet:decred-bip44', 'wallet:decred'],

  // Configuration options:
  defaultSettings: {
    network: {
      type: 'decred',
      // https://github.com/decred/dcrd/blob/master/wire/protocol.go#L104
      magic: 0x48e7a065,
      keyPrefix: {
        // https://github.com/decred/dcrd/blob/master/chaincfg/params.go#L823
        privkey: 0x230e, // BTC is 0x80,
        // https://github.com/decred/dcrd/blob/master/chaincfg/params.go#L827
        xpubkey: 0x043587d1,
        // https://github.com/decred/dcrd/blob/master/chaincfg/params.go#L826
        xprivkey: 0x04358397,
        xpubkey58: 'tpub',
        xprivkey58: 'tprv',
        // mainnet is 42 - testnet is 1
        coinType: 1
      },
      addressPrefix: {
        // https://github.com/decred/dcrd/blob/master/chaincfg/params.go#L819
        pubkeyhash: 0x0f21, // BTC is 0x00,
        scripthash: 0x0efc, // BTC is 0x05,
        witnesspubkeyhash: null,
        witnessscripthash: null,
        bech32: null
      }
    },
    customFeeSettings: ['satPerByte'],
    gapLimit: 10,
    maxFee: 1000000,
    defaultFee: 1000,
    feeUpdateInterval: 60000,
    feeInfoServer: '',
    infoServer: 'https://info1.edgesecure.co:8444/v1',
    simpleFeeSettings: {
      highFee: '150',
      lowFee: '20',
      standardFeeLow: '50',
      standardFeeHigh: '100',
      standardFeeLowAmount: '173200',
      standardFeeHighAmount: '8670000'
    },
    electrumServers: ['electrums://127.0.0.1:50001']
  },
  metaTokens: [],

  // Explorers:
  blockExplorer: 'https://testnet.decred.org/block/%s',
  addressExplorer: 'https://testnet.decred.org/address/%s',
  transactionExplorer: 'https://testnet.decred.org/tx/%s',

  // Images:
  symbolImage:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMAUExURUxpceDz9xZl/iPVndvr61/M8eXt8MjM9dfd+a317xpq/yDUmRhl+szt7hrVmIHE28Dr4jaMmyfYoCHZnvX7+BzXm3jewXCZ43Dgvxxo++vz9miW6BbRlb3U65nN3/D39A1g+wxf9bnR6RPWmB7SmSfRm+vu8CJq/gzTk/v8+fz9+xBm+x5t+hNp9Btj9RfanCvUn/b+/fz+9/j6+Pv9+dD48Q3Oj/n++xdu/Pf9+vb8+/D6+Pr9/AlZ+tfn+cTn60WF+iNr9f3+/GbvxQZX89rw86Xw2snm7bbc/+b5+8D/9oy1/YTnyeD6+pe58ev5+Pj+/cfn/8je+BVf6Z/95XTzzVCL8IPw0M3//CHMldz//ytr7ZLz1pu98YPry1Hbr9jx/83p6/b++6zJ97H65/f//2ab+WvivY/s0Jfp0rHv39Xu87/S9Lzv4azJ8mGV78nu6o/ozsDl5tn79bLP+qjG/YCs/G+h94Kv9MH36uL2+Haj9cvx73fhwX3kxsDz5liL8LPy4eb4+tHj+pS195jt1Z3B+b/T8m2X71uQ+aLw2nml8bP246HB9cz98tvt+J3q03bev7v157zW+pO49Zi+86776LvT61rdtT147brV/MPX9nKa6EqA82eW87bU9IOn8qzL9DrPocvv6JG391mP9pa181PcsmfhvC3Yoyhy/y7Yoy7XoyzYoyraoyzZozDXoydy/ydx/zDZpCdy/ix0/ylx/ylx/yVy/yly/yVz/zLVoyfcpCjboydz+yRz/Stu/ylx/SPdoy3bpSxw/itx+ilz9zbUpCZv/1GU/zTXpFn1xIK3/4382yh1/yR1+Ia6/zBt/it0/Yn72SB2/x9u/yl3+iFy/5T/4jTapyR19DHdpyfhph3foj7frF+b/yB2+pTB/zqF/3at/zp8+Cx5/1Lsu5vF/jR9/0SP/0zgsjjqsUXxu06N/2P5yzF0/Bl1+i/kq2mk/2rjvi1z9HT+1YH/2z3YpiV7/kbpteb6/1nhuPn+/6//8qnS/1D2wph/4MgAAACpdFJOUwAF/P0vAgQBAwT+/PwI/AffAf7/NvwjI9H8CtL53wwP+fnf+vr9FP74IS77/vz7/f6YGF4m4/R+/jt1RVD35yr//WX+9F38RP7E/v4+rmaQr/7s9v/++v7+9/76+jzo9f5vyd7+4vzvsHDaqllVdPeX0Tbz/v396uXAcPuKk/z203vfxLiZ8peC/eTLuMfJ22Bep7zjpOAi0vjjz1zlsK6qjPjjSTSI47HPe49qAAAgAElEQVR42uxYe1ST5xn/IEISIaEQOBNGCSkJEkDuBRG8cFFQqiKoiNq1XqtSWys9rnbWrdbW2nW1a109zp11O+6shu9KEnIIuZGEGIxc5KYwCl7BVoqX6ijqdHu+AGpryJfsnP2zk9/hknPy5c37e5/n93ue50UQDzzwwAMPPPDAAw888MADDzz4P0Mgl8txEVyOy6uyOdz/Ar4ADtsTEzfgw+Nx/udfEgDguf9FwrlTXEWs1J41rmSW8Ijryz5en0ba46QPZLuTZgXHSp571hU89+ycL70gKL6MLBCEE7vnmS+2PeMmjh/at29T8QSTwAAvLy83mKz7V+Hmy2dcQFPTxV9++HauEOF4MRHhcqQVq7vzOrqbmzs6RkY6mjuamdABj3QvX7580YJ3fr9167p1s3LHUovrMpf5JbvWiEQzQv2dITQhIWGGd2TpymWV2V6IF9OaPDifBbfLxX4hfn5+ISF8P9cQkpgoCLJdu7137dqN9yoLeGHCMNcD4pXy6rGHl/Jne0/3dgpg4x0Xd2fz1fUZCBLBIESw0CPbP+ooT09M9BPz3UFUlODW0N3BwbyysmlbPitOps8swCXdw+FlrD+88puuxvaBmknR0tJS094+YJhRerTwUHY0bJWBCWxg6fNl/YkC2w82ElWQCpuNUjDCZqXMQSF8fjggaXBF9+pff1qQKaTdkrm6wANhsRkbNlsiDaN6i0VVW1dd9TSq5Sqj0aisbQxNWFM0JxUJjGAsiIgwtbJbIk6yKXQkoSU0Vg1JkDJnwFFKQ6EyPIgGS2DS9l67/8oXx7PsSmEOCicAQWLnf/j6cFzcqKWtTWmoc0CkaoyIuqZlav6Vi8fW+SLcAIZIcxHhrOc3XkuPCoJz1poI2KQMd0pEhmIYSoMODkQmKjxccvefIyfezcikg8JsYRxuIIL8YdeNuJnGtjZjrUMiE2hRy0WlTX8sCEN8mJYFoWZsWt7fJ7BarTJTnwm1amQkQ0weM8VJs5kkkyTlYtvIoh0R0dEuyIQDPJAjrxWdmu09cNZilFc7IaJW14TGjZ7fsA4Uz3BCUG9SUitXXU8qT+qx4qY+nUaDukwEw2QkEMGTJBJy6N9fTVu41F5ZGKlEBCDRBw4Pd8XdbG9TOSNSZVS3dIpCLx/+W/SYOzkzRIhJcvGWr77r41utpMlE0pC5BpoIQZBmRY81KTym7/qDjz7NzvIF0TPbMMI78OawaGZdg9oZj2qlQSlvnBo3vGsJ+CKzlwjDIt4fuRWO2mwYodMRLtKg1YLhBA0SpbAggYD4Ye/qfcEgFFdsOHbPB5cTRIaWmqrJYyKXy43GgZuRnad+/vfsFBCCUyocH/iz8/2y0+FRvTYNTuBw0K4TIemYAHuFNYkfEzLYvXHxfEhoH8b04iGcipKDa2bMrFZPHhS5qqFB33phNDRh3q7Pc6W+DD0k25cHSfvxWigomFVDYe4QkcnoVNRptaSGIr4WlJe/9GD3XB4SyOQybKAqnbWsqVTUVVND60SlcqiRBktrq0FtyWn85vWS9ZkIJ4xhVVh27p6Np9NZUBPHeeAy8FgmjQDgGZJOLxwniSCWWNK/YlsBlDDGQg/WL00uOTPcFWoYUKvk1cqJDFMalY+J6PV6ZX39jRvxopymZclQrcZrFXuynpvng0ypWJAXFKNT2CgMjAnFUEbVY+MgcXtgMIoym1npQyNbXkAYTcYuFE7yvSLIrk51vcoApVFlB733CU5Kg0Guqq+vl5+94J2wctnCFMSX6YDY0GZWLLrPTwyiNCBhGUWhOi2o2BUm8AJFgQZ8htDq+H55b8yFOs92QfHBuUv+fH40suuGpfWCQQnlXKUy6k+eNFY9YqKUAze5vL0lXpRw/upiiElEoHMi9LJLF0EPKVD0EDoSzhnShSm5HjFC6YIPP6S5lyUeunbis+RY+06ZFI8gL/724LmZ8RaLvs4AsTBCc2LRGx+XxPH/KvXJ1qn58wor5kJEQAhhKWGTKh8Un7Kwcm+/QICbCR0BmWKjUJmbwOFTNnFU/4PVGVKEyzSo0m/zfrb/crxIf6PNaDC0AhMwXKMD/zLe+YfBP/RK0bEpSAD0kGmpwZM2xbR8pMn3uqmokB4FYYIO0krJ3AaO26yYoG+orLI4GuFwGGMCm3p1//eXIv3bGgwGOiZKlUMDU+pPtrfE5X9bdKAAaqOXNCvNSXcP0QpO3j1t8JY4qddMaUArMvdDQhCyHjIxJmn58exoLxeujbg+yNwNTTn+jfKq2tpaA51djojU1srr1Z2dkTlFv4tmPB+EzQUqO35xX8LCrFZMqyXcJoLKCK2WstpYrJ5XKrLsvRxTUCDjC768eik/tKZB3lirbwXFO2gfgUhDW81oXNylzfsLmO9V4Ht5sdu3jPSmYz2EyUSQ7gYERUmtDpKSFET1r90KFuPCMA99QNZ7Z+bNSACbrQWdOCQibzRaLBbjwIX8lst/eTEzjcne6SKPbN92u5cfYm+inG3ZQV9PF1EUg6TUakPMgyd2chnHVPr4AhEv6XuFR0tz6lV0binljrqVRsudOxboWG7ObDz61qZkEAJjH4SE7dzWzIohe2w47oTHBBMcf+IxqKEaKwWtJykT8PPeeGHMYhlvFBEke/HDzaWi6ep24CFXKp9uVizQrOjr2xqgh4w//3BORhoSyBsbcyeLTAC8P393x91wVo8CxSeVNF320Ud9CvqICElZUa0W0/QIoobyPt4+Pkkx1UYOEnuocGXO9EblGMaKofJJIvpznYaGtjYonfEwyr+cIWQWIPQrWcebbXyWTAEbw/HxM6f/wCu6c6G7dx1tBTgUDpiPMfTRzEigGKkjNTBvmmIkzdvSwrjMKUArnp1Z/PLFAZH/QDt4cB1EBfzriSRTG5Vgamqo/GfP6r0jr+wqSQ4DG2acRnlZnzy4lh5i7pm4O6HG7ldIBUy3ZoUNZADpQwIbVKPRUNQT06/9F6Nw3dd+kv6yT3J5HOb5xG792es//82lzrj4sycdEIGpRQ0Nf3U1HZu6c6LSM2++LaWLfLRUOHl3z4YylbpwwX2/8B/f29lvtVgsVlKSxmYDkZC0GOh/5E9NGCchNj2a9MFVe+ybZFY8PCYU/ulX34riayzqanqkotXytOpVdZ0X9JbpoQkHC3fQZx6c66w0sjmIV/C+RS+J+X6Sn9w0isUSiYRFmBV05aenKhx8WotjDozYrBMP5b0D/urKJaQ9bsIlb53vmi2vMcppxSsdlUYgYtBbarpm53x/+K9SxCctM8XZvEVfJKUWr3rQ0dz9IzQ3d6y4fvq7oagYsURDzy4YRmE6rc4REVRnCgoKmvZuhCsebG/A4cnXPhj2nzq9gR5QHBOh+y6lvM7QElp66j/Em3tQU3cWx29g8gAJLAHtgKyQEROBhCooAkIligoV8UF1Ga2PrvU17apra311VyputbrO1LHWVtfZcd3V8gh53WTygJtcuLk86hJhAtHI8lIWQRSr+Jhu1T03Fg3mBkLcrWeGP5gw5H5+v3PO95zz+93uLZEeOC1E/Pr1585NH2Lnzv3q8OqNF9a0tqpCQqaUFslKYGMg2KV0CbqsomrM5Nvz5go4QR4NuanSQ/Dh5xfj+YSmWKtHUTppVGgaGpQ2q6XRHN+UsesEi6q8hm/lgSUlJdTFtm/Pycn5ct7by1qjI8ZUtJTLSh3VJR2JVFY3ZWzLnOlTBYyRh5AsahhOFbbvHd96XVKjcwsCKRi1WrGGfnVcVO3e3PkJjkgYvtVyP3dZtHDT6t/MaY0ODKkEzXA3nyytrqtKUuVnO4RipFCPEUASorRxbta1+DCd1mikLYQVGgIKfj1Io8J6J75/w9HESEeN6J1xwhmRiz6ad+9vk3wrKyvKpLSeBRpjMKgmVtzfFIQEMUcCYQgiuQ6pTlz88QaJBNcbjThBA6JRAKHJRGCYsRGL9+lcfnRxKiwDZ/hEwmAxXjbHyS71aejs93a//c/WiMDyKkd3X1o0ZFsAhOrjVTze1dVT07gclicLxJgWs+rUkq3fDlANIwWipMtaVqWpAbdYjDjeJYqK/2Lt/pRIJNi7Y1N2EJeCmb3+6296r44NqSqBcJdBny+VObNQeim/MiVp2YrUkfteh3vEZp8uyOi0SwgcpeZ2tBMvhZ4aU+BUcYnWa4U+NRnd+xM9EyvadpKqoBJiZ332/rKkwKq6akNZuRSqd3Az55JMJi25Io3ouwwFfdCIdeO02XPP7+jICEiPq9HpFMU696PtQSQtSvSbAjIznhSmcRGOt4HCoSp+JGbb18tUkyvrquUV0BwXDQWh3E0l9b3auylR4De8mMCDzPjxyfKVYompwTT8ZNvZz0xQ+YvyVnYvnclGghDvjVrIRfn3xrxZWV1dVF4uk5fIpC5JWDrG8Hh/6DDdIptakshtpxa0qePEIk0DgXsKoiMIiBlxXsYnhXtGPmwcdtgKHpG670H05KpqQ0VludxAk4SvREdf3pfCcgsCX89OmJXbfS0v3Uf/yIKhdGMUWoNyGKJJb7VlSjrWzY/0ZJjmPs9wkaCF0+9VTeTVlQII3dxF5Rt4+/fj4FvceVUwkpB6dOcNYZjQZDKT9nZ9sc4jDgh7I0maUb1WGCZpW/chEjyB5TUJm81EEmbkL0t6s8ogrSih68QA5Ok39CDwtSzQ3cSpRzd0RkXpuxoJHCMxFPUUxGbEyAEzTqibMuvvHsiFvQ1meI0CRVnMosO3K6Or64pox8UlPN4Paz5N4zDptgTyPyPlraxv48WWZoy0GFElNLWeuhZqBBDSDK28rj6O37ZrVTjX7xUinpq2bnunNbq0Tk5/Jlwii+jNX8iilRJI/7MLF9wSiiVkI2a3WzDMbCY9A1GggAyVDHUCjDWLAtQZ4/+amoAww70GAeeYtfnCzRDes0G+S4Ovkif98Hh3OM0cIpyLhM8/vaM/09/YjNegZhIWmHwxjfcExKZVKhV6jOyv94nqWXA6NRQZecDpXgS4yLjDDyYGXpGX0IIYIlru/8lFE6kRbQIy/9QnEh9/m6JYCV0s7ggRT5Pvz428QqFAYR8VNn//lVupowcGw1sQcMzYjx5PCoQQofEtAIluuf2dq7j7cVmMuccXXOf7q9U6WFeoPHQ6FJ6r2HNTFDv+HlI2Wm/z56+8+DF1HMT1MuI5SFBM6p/XVPny6KNd7lvRunpGLNNlMMcNPdWRx7fqcZCD0Tw+jcTjkCmsxvi85Us+EHCYwd7mLljsze/+O4Knog32Uplv9OWfZr/EAUGZWHjtujjZqjd7nqncgRDkAGm1JvNFtZ8XxsJmexslCLJnxf2kKdDFuwaJTFblG/FgRaJLBzqzEOLc+shqNIOsvRKIQkmYB0ij1Wr1yazdcTDUMeX3SuA53LSFG8t5Uwx0IBVVvIg5++a+dGcAmflWx8qAJpvRCIsJUfsKvgUaj1JyotXrbU1x/R3HBYifl6krOIgl+O5pZbRBLnWVEQCZ/P283w3RQa4gNXvHrXQfNW4GDkxveyUQo2Oc2qDBSbI5Lqpn74ntUEN6dUeVCVGy6f6/JtapaEDKYEeevusMwmQgkb9dez3dpicIM0gHqtePBKIbzvTtFAj8r4EBe7MtveviiZNe7giTwYnc/U7LZLkrCHS9Kt7Evj9+6Zx5JyDBRy+FRVnrCQh01Kh3Pl13XurndDrqbl1jo/tLd0RDf2NzI9QFzWaRSL3hwCyvO5PI7PzWCJqsJZUbVLzAvnvHOM7Cc3JLQbPY3ggEuFJr0+NOaYtSONBGnUKhVIKywEPq1JoaodDf35/6cWNCoUiUnOwfFhYmIQPSu2oP5SbGejgaHNpyM7mpu9dU8HglriDVcl5033+ODcnWZ7sz+PYBHGJcqYQYpQqm5yBaLU75G4BABwi/aWtqapqeP7BblGQw+DxMFCYURvGpo4eRRwW08s7OudDny1O5HlkbAORm77EXmZcbO3Vdm1ZsHwA9VzjEGdU956AuCGAWO1TzZpJQN0ri+fyo9IAbPT21o7Cezp6OtQe9BEHGXegb6woCyi6X+t7s3TztxX6krO3OE1MX6OjEzXEnyGLEIAWJksOwrhsZt2przxQUjB+VFYw/8hfEm0beD2HkbKQHKZVLeS2tm2a8APnHrrZ4SbMSxegEnYCAUdZAq9HYFMcX32i71J3149K/vzF6m+DZ3Xoa19r4dIyvG5CQh4fX/ywhQeFpZ8+QQrOZOlV3TbMoZsFwglDjAXxx591LRw6dPbho6oxf7iUJcK2c1d9H04KUFpUFPpz306DihBc+aebrTLjFgrleO9OhxvZ2KMtxoXBg+c6stXueLWswc/TG9h7kNh2I4x7BWCcQ5MAlW1Q9YaKWnv4ApLldnBnflrXkbFpazGCCH7V5cgw7WhDp8x1hM4MS5hdcb2qCkhencS2FQmNqMImSH/VsPZLteCvi2Zsq7F/WtdyCVAyCcNmMPae+4AvVRgsJDSHuKuUaoh8PiL+V9etZCQks5Jc39zFSJIO6cdC1wLG2PKlNN/Vb7KQJH9Ke66ibAkpl/SNx060zhz519C8eHBH970FYkLXcggQ+fP8ZCCvy0PIun4Z+uwUjCKe+UKHRoJjRZNK13xHf2Hueigo/P/Zr2hH69EuB8EJaqfTLQZjTPvhK4q/UwGagGp0Th9JEmC3tpoYusbhna+5JR6LmvAYOymfcKLtjJH+z9Q8pDrFJWdod5aNWvHxuQNWJpL0dJ4TWzp3n2UjQBMZreUcwmOnHCf1szU1fOpASVemkvt4cx7ZxVn11Ny5MTXNFDsNIzPjIEpCxN3cC4oe8JoNOKXxxfu9YXlkJHchg9QuN9BsFPWKRKwhG2kEFsfY7poJcgQevCvz/QDiC7PzeCNobtg6Qe8f+S8y5BzV15XH8QkpyQQJDAq0wGYEhAYRIwkNYEYWB4mtVtIP4WKvWF9W2rtT3TrXbHW27tnWsVusf1u243e2Ge29y8QJDyAOSGxLEVbcoj2iQURTlIV0QZC1W95wgiuagcNFyZhwYZy5zP/ec83uc8/v+3IATEYT/8N0teZnrKbXx0qWySot10sWu74dTk/4qZwQ/lN2LBlFBkD1gRtwEbh+tuRVdVuAKAs+lKi2Wabdmvcf9gO1lgMCc/S4jZREclIZ5lLNPwASHZ90KASkfog6+rLQ6IsLSNT3J18NtzEBwgefEzLxm0TjUSSME6T9F8cXwvU2l7ueKUBFWYWFtoHfjp1n+HBLUlzZAIpa+ZbFILFJTKJAqUWQHPNfywOJOnD4VaNKijtiMFSZ5987N/m6YYOxWllDgm7RskUTMahAgGo2dF9njPGmMS//iWom8AglSYXS/kXPEXzCWEwK94TszmiUiFjUjGpYWBSyanAKi6pTp2wPlVpO2wLXEpLyoLqTl95vcxs6FwDFBgH19p02qYwwaEiFd5LH3/pUaDGvAfmkKkddqUSCWoprQrlXJo7hxegkmC/z74F27g7KRaBCpo2O3c9oytzYCEERlb4HWYpLLm1alczr4eHnxIv7hxp4wBUuTGtSNFSNx9LzrCUHe3wZAqlElylptjPz2F5kJnoIx2yECvqcwefbiewqF3kDaSFf7yzBhjrOHgD0AIFdPDwVyLtS6fS/2ooKoVwoC1sK8Ja2Jer3ZTNt0CBAism1O/63u/O0t0ZXViNspbX5paPfNv+FjCeIxAcN29zgkVYzeQNtojeshijKyedkCCMI/vv6ae2VRaQkSJG3V7HDcbYxABLjQDwvfcMwhFumqaKR0hlDKruQeSsFh/4bjf70WbQIgWoQcwTtt4YIgzM1j7EyWcMPi5jARS9BQdKJ2sVrMOGnHitT+Eo7jt69NqrCUlbqAFFVG3Ejb5I97ePiNyXzA74fvW9F6mWdgVTpnQfMgXYbzd9LuE5b9cYITJOHztP/JKyylCJCIwJacf2DYmOQhsE5RkOD/de4ZidTOqlU6jVn/RFZKUSqSgEdzKrFo/3tRQhh4xH6VVic/pUXcpEOQP44RiMAT1tPEbszt5YlUNEhESI1B/RgETA6pIwmaNQe09e0O5jvfcN22616VJfkI61sU4X17xw/83x4E76+TSI/dv6idJ2UYsIxgXanqCQhFaSiSJliDpHn5wUef+v7W6+6VJQVokNM73h6bGeHHxb329zmtPgEiO+GiV1IRtE5tpnRqVinJWPsnvkD4BASlQigKjGnc+TbGMWIUcOjKJBAGCX194YdLWL06L7fZrBAb2IEEd5DuitTZNGYDo9Yol+7Zki7oj6Dub3s1IFwO6x89ODEl5ZMlczJkiTwVw7qqyiiKoqFWhmWlyo4ZWVNwP/6TGTmXj1pavzUINPMCWLAxZ8/KKnGDQWejSbAVKBUKhVJrJFXZu8LxR4HHc0FOc9/sweEcHkqKzdq8b/f4+p5WmUTR4GB1OmCcEJk6sFrAQfIcK/dNfSwaXLcGWi00CNjs3MwvMOsfZs59faRj5uT7c7IvZFyRSqQihtE3mEmbTm1AHAKpQSjcK5N07JmL8QdeL2lvWmlEHRKkxp2rHwGPHMwbf2z8yMaxH/sy+lqvXCFk40QkcOUGsLYI/bPSJGC9KOhH7D6J9VumPMmVgGe/EQii30IEiNetnH9G4R4jD7XAH/9oSf3D9uYzIxgPH7b5REokEqmSZhgoYtfpaPDt1YNAYGjiFP2pbDYfx5mjsf1OvX+AWCuwsuK8K4i2MkKe81YWCBoFHECSly0/KfHh8WQynkIhBj95LxpisVgk6m8hQlEGWA5vU+nVxOPNDt6fIAkohiNpEENGtp395KnlAqJf93LrJWMxIvoN4Rj94rAd0cHdzW2JUpsyQKEIgDw8XkDA81FEFEGwTsUIpYENUWgKBiePrRbUjAAQvZq2VZHKzh83fDvYpOIwHymvOF9WjCi0DLk+a16wgGsYn5qX0SlSMpdhv6kqhoVqyecP6LwJckDYBiKqpxUw8D8ImLnTNBsmvpvnhwUNdg0gQwyJqC5zzUfytdUh2quHg3GuGSL++r67nZEGu81m06lgnxqC7u/WNNQYuiXSAAgIg6F8TG+OtC9ZHfz0WgE5+7SIohIESLUxpKbpe445u7NTwcxDGe1hUsBBOnXfJD3M/i5DdLGAMh4AwjgUke31s5PDhU/ddr+/rRGCIGrMqq2BdadPhPO5zoinJxb+Zb1dyhMZwA6F+mHVaAbskmIwgDiLbVDwzk6eij3TCy9z63qwtFC1clrr+d9V7JiXMjxpLyJRdXZHyD6T6ONw6IEr1oGcQkOMgoQmwZSQdk3i5fpdU4OePceNX7U9VF6ELNg31sqndcGCDc6Vrp7Ya7tm9Il8xHqnVsrsBCEIriA0Sen1PNmVRQcyXfsvxd+/GhORj+h7pC0t+7k8pOU/87mnJAKBBx4+b8mdpTIDS+h0j/RexEhJqIGqEzAneof0ZP1G/yDs2YJoj6ikndfr5IgKlOLS0p9+8vpv2lfJE325nsbDnGdq7NqzvRKFge3vFqChht8uzOk8oD4fPgO2Om2zB0S2XdiV6Zxsl7DoROPFmG7XXeIEORc96cH0KO6xPCzvj5u9JVfX0GDW6GDTPw1smTXshjv9ICTwjFDgTtC8ANGiox84lWSuIEeaLoZ2/1yCqCe1WKqjQ5q+eQMTcj7GhhUG/ulf7mlWhLFVsMOWSq03w/5BwyMBnp3U6A0qGlgs1s6KE+3ZG2eCdeX6YYV40OEHN0K7UXbrlMlUIfeq/W5+KoZxv0MUemDC+M3j73WG8RgaBoIG/QhAQBgM4nmwwUimShnQ0L74QDxaPivE+AsWpoWWaZFXVsUVtWWh129+Nrx2KkN7FLeguSs6whR6EF3APg4kMQJTRRjMEERXpZNJe3+dPMUN3XwD98BTPsuprUF49oLSgmJT7Xnv8sZPsyaOSl8EzwwP5nV0JoouA8cIPf0I9jvcIirGTkjC2u/kZcU7He0QV0Jv/LnFvaYIAVJmslRYq73e7FoIlVKjuBDFJ/hhB/dnKMVisN5hAjtsEBDxgliNMoh55s7cPPAafsIhr4Swb7/pivYqQvZrMlUaa2vcrevfmifEhJz1RU6dfvDMjfWiRLNDryZpaIyG2/lIzdh6SUXk0p7lG1Lj8KHvZfkYf8r0mzHeNxAgVmthZeH52nMhMf/empwAK7sE3OcEw97Ztbh1aQBsgTB8EI1Br1FKpZ1nLhzdHAx73Qz5BnxgHtfN+oN3gWsRh8lkNJacMlpra7xi1i/Mchqg0VwzC6Z+nH1SJjbrhx+lwIxQJJMpV679JQl/fqiEY77h8UdyjF4l1c+cZGstFuOlS0ZTRbe1LtTatGYzrC4VcrbDnsAMZx74tS8xzGBnyP6444U8FDUu0efe3fp9mbDZygs+JKxpvNkyrbyopDS/WDsYpLwQgli6u2vLvN/serApNSoOnrxx3fWwSc1fZvR1ikVgl1AglSWGbAE8EF4xSltr67GjB6Kw/5N25kFNnmkA/wKVBAikENhZmEigEA4hMdy3gLAqsF5Q10GxKuBOq6irVt0Rj9VWq9XKrrvdrXar1r1GkwA5yBCOhEDCkWpC0AQJyq1StxZUbFcd7b7PF1oQY74P+/7BiPPN6DPv8dy/h4RfhIcKHmQZjaprMuh1m2wQkVwCBB2gfhUmuir9D2c2zIdiHTfG60mC3n924qFVmY4sfrfwIiShkG68aEupWLM6IqGw7sLDnDd/nRZDwUjUojvR3FI27R4PCdH3G1q06pdIpmIAf1brwwOGO5Z//qvkKHwXGc7Ozi/RJ4jAcM5IFyVF7vvPN01Bum4hmB0VkB6wLQgyy4R8fuaCxXhLGykg/iwGxvhwKMRBb0EnqdEWVEej0Uhq23x4p8t2fhDtS/H9Wa3d2L4V94NEAuBPQWTHtiCV4NoK+EGPSsDUJZn9g5bd7OWdqfoWS7/MliAKtVar1EtCeLyR9q3HP1289IQMXjUAAAmnSURBVNVcHYLHAN+ytPf2A2+2uapqgo5pQxKrQvfk9z48gUOSyaaIgiPL+2odoJRDbqt0AO88lon1XeEB3MGhRe8v+deaNdu3T0fmJCbG0DCCSiIqxdcPox0ufNzkytchQUS2GW4iXBBRpbSA892CzcHoVJLKt1AZtODSIw/8E6ob1SqZrV48g8EC4ADV2JjJpB1O/2Lr7r8Uz86bN20d2jQHI4QLUz1oGPvg25kFjs3ICoac2qv8WnTAdMiquf3xQdgTUr4dslP8thzPMDUCZNKGIDVdKqVWrVErzWZDBC+LN3KvvW/ocsfAtHWn7Hx8NCHNB9RB2N6PV4hCb9brbBWYWHmfuCCC7obQpm+3vQdnmZwGQ2/80Qcj9Eat0rYgXejlamwEPitalggfLpfLo/u8uOh03rHlh7zcCDG2YPj9Luep91xmVWudLaWIJzuB3Ypegx5H1lf7/8Rm+5JrBkKf7V13L2vMDLV0crxHYVI3yqCWGTC/SKUoDehts0REoP/3CwMLYDk46PvuFEUTei/AwAnbU3KlILQJuY2wJ4ABFkxt+KyoBAe3oUKg0/Hd7z/+7ERRCjn2DYXmNj971yCXO6oBdo5cI5/SOimzXnYJvmRIkha8jbKzWgFNlfgP/NdbSm5++qIPEt0IwUEUN8w3MnZlb+BcUauuUoQDgiYd+Z8EgVB2nbTHm9V7fdWyRCoZSjlyrn1jijsyAjo1WtAmRuOUpmOZGt8RMTT2yeWyCeavuPalpbRwueMdecm2ogMvGavs+CeFnEDvKmllhbC1TgRMQ8EUuiSeDAGhkEJpYNY9zYmdQ4oxCd+UnkPXRGm2GKBPYaqxMkFqtApi3Rj8t2mrptNs5mal5/4ZKTEGQeDFzQOLid/x7FtmILMHXQjkbNnMsomQlHXSeiarYEXJ4hRyBjiDhq35/TH/BLO6EXkhBqVGPvOmaQU6gqkZHcXb3TAqgTYGLHjkhncu3LjpiWyVi62AObJ17ZFzLKxvqucXrM05GUbByJEKnNecTb/mozFqLWP9aqNGLp5hI7j4ktpo9KEb+j4pxZ9+KoHXGJO4fd+j+3HCngbkAVfZUilAMK0TNjTdbAri3C08mYzXotlNMUWlzAEY5Jbc4dQQjdkydq3xdQQRtxmNo/0B14Y+/CdusFKJTjO28N2Hj70DmxrwxJrtAB0Ssanpxg3HuMfXTy18ZfDB+ohgWHJREvwpaV7ZanoEuiY1bXLFjE8WNCVrWwzXXKy1BiTaDmm04BNXRIFNlRAWvWjTDhZZU7wN9cxAx6sb0zAPit0dCZufiBwG5+iidbmrU02do1q1auaEAbFMiS6XujoE6f6zX8Z7YQTzfGgUBqSDrt6Oc+2RCkVCW4I0VEB+FzDlNwJZj1cAVZbh5kT0JGJe8UV5u4bpIcjcfQ1BoOekX9VoHL0V7j+Ym7d0DhHocCL1UHjX0btSZ4tOAaLAqJg6yCk0C+Iavnv3F2waRvCUoJPAjoqJf3JndaqPuRO5WDVTuWwklhqdKxyRoFAlmIa3zsuOwhm/9usWMVrappy7cUypToAPK3ghMiG0OsTIYAH8stRx7o2n29az7dlzNMqP2xUTWZ7b3hUeUV0tl6sVslqZWIGuCyl51Got8JyQVXbLkBCw+vKipYmEPTQw7yd58YJMDkskRboRH1Iyee/hWEGmC3ytqjpdDzP0fuYvD84nwcCHlEb8vNzTdIcuCXIM1UqVCoCZ+IweYviOHFoXlXqFXK38n8kF2ZCbKMRWK80Ji8rOWevK5Osg+dsAwXfBT1awtS4TFjJk0CvmyLmwclUkjRjmj65nTErp+aGRLG5ntV6p1WhgnoJGbrVNiKgvEvhKDDAks96UGtJ3BLkos/yI/8nkyJxHQSyOTgrZE5gHM2U2DCgTHNUsgBpyvivzdmFsZBgx+8b6vH9SNpzBjehSI+2oqK0B24qUIJNLq+3UO2S1P/8oDfqsCWxvZ8wr+8DDXk8Ov9mKmKx8VbodnT9PVsHVnKQw4ucdn0uQ9vmi9Pz8kOpqg0Hd2CiprYHoCnlBZODmm5U+9OGOc2yMwSDyGjGnsMgDV3sLON26uqqL9gKqyJZ05NQ9LdlEI/TgrNn+6MVHhu75pIaPGVqMGiQIGMMK8oIo0aXSmvX+We1DX24ndFWBv+QVf/izr+6zPLvRO2V3dIxUKmC5Plqw9w0y+WYKckeX5ZUNRyQk9APnDxAiNWI1ac6hTFZ7CTmUBrMqoPryp35UQqOVCpPB/vjObfe5wMK2Kwik75is2yV7fUnkNmEugVfykuLnfS6pARkto9UKkEROWpBLNSolOpJKs4HuMvLb82kYkSuPK87gzdseMePqmwVCu8H6ygqp0P3mN4Wngsk0EOMVK0uzj3/RPqji8SIkyI8Csi95QQwtGqA8jmbkDz44uiY5jGiuA36gD/41s9fdu8JuuB69xLrWnsDQHwoPpmEYuU624GC/jxYNjfN4vDa9Xn9JoZGTdFLEaEdatOq2NuX4uCUh5PSRDfHEPjfaFd/kA1cKWA2VUgFBEYTA09O7d+Vh8D0IZ+s44ZuSmPTvsx1D6bwAfweXtgn3XKHAgTwSe3YwerdaLIaumpbx0YhwU9/z8iQ24dOP3EqnPSev98Yxm5srp+GKpwXwqnTdQd4/rN2XhNxGCokRHmCeYsl5Z3b/Zni0zeRiMrW1tUkkYpyUIpEQKPkWi0VVI1M3mvuRvTKwPJpNPA3BzwOL3lHY6u1tjce/IrOF/hppfJ2Q5fiwJDuRTaLfk4oPB2MnLlySt27gwb2MgAB/fwcHnxq9YSKSYnd1mvFv9GazGSmUXeXxxMRG9AwFp8Q++z7O1bNHWiW1W3bXXcVn/vfpgiKSZCUrRZgSuezc+eNlQ+1ffz04csvFPzw8nO5AetF9XByy8i8Xl/6NRptF7MonFb2d2e3uDqx/+5M5Hd1D475/dnJz1AzytG5sXzev8ifvD+wq25o+nhFiDS2SXDw6PZwbkH9s53oSpUbIzEzZkbOWw3LlcDhEA1M5LBbn6jSYnr0Q+oTiiU5av2XJkr8fPbJ858AATKgluXJz0Y+hvjuksFTIBvCdv2ff/uswx5ZgwRyDh8+erJ9J+QKFwfjxpjot21Be/o/Zs98iu6xfFp95q5RU8RcclJhTsRvJjRjeGPvmQmwGklA9Jl+cMBiuPPOZzG+kBZOKRMMn1DDy/0AaG5vZ8qBAowrj/+3doQ0AIAxFQdcUgWD/ZYERKgiB3Om66p93fmGZ/eI8+EkZsfMBWbGuWyVVXynUDy8BAADgNxMO98P3KqJSIgAAAABJRU5ErkJggg==',
  symbolImageDarkMono:
    'data:image/png;base64,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'
}
