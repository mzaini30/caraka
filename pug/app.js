$("input").on("keyup", () => {
  if ($(".jumlah-halaman").is(":focus")){
    var harga_jual
    var jumlah_halaman = Number($(".jumlah-halaman").val())
    if (jumlah_halaman < 50){
      harga_jual = 0
    } else if (jumlah_halaman <= 79){
      harga_jual = 44500
    } else if (jumlah_halaman <= 105){
      harga_jual = 49500
    } else if (jumlah_halaman <= 155){
      harga_jual = 54500
    } else if (jumlah_halaman <= 205){
      harga_jual = 59500
    } else if (jumlah_halaman <= 255){
      harga_jual = 64500
    } else if (jumlah_halaman <= 305){
      harga_jual = 69500
    } else if (jumlah_halaman <= 355){
      harga_jual = 74500
    } else if (jumlah_halaman <= 405){
      harga_jual = 79500
    } else if (jumlah_halaman <= 505){
      harga_jual = 84500
    }
    $(".harga-jual").val(harga_jual)
  }
  
  var pra_cetak
  var eksemplar = Number($(".eksemplar").val())
  if (eksemplar < 25){
    pra_cetak = 0
  } else if (eksemplar <= 49){
    pra_cetak = 500000
  } else if (eksemplar <= 99){
    pra_cetak = 250000
  } else {
    pra_cetak = 0
  }
  $(".pra-cetak").val(pra_cetak)
  
  $(".harga-promo").val(Number($(".harga-jual").val()) * 0.9)
  
  var total_biaya
  harga_jual = Number($(".harga-jual").val())
  eksemplar = Number($(".eksemplar").val())
  pra_cetak = Number($(".pra-cetak").val())
  
  if (eksemplar >= 100){
    total_biaya = harga_jual * 0.8 * eksemplar
  } else if (eksemplar >= 50){
    total_biaya = harga_jual * 0.8 * eksemplar + pra_cetak
  } else if (eksemplar >= 25){
    total_biaya = harga_jual * 0.75 * eksemplar + pra_cetak
  }
  $(".total-biaya").val(`Rp ${total_biaya.toLocaleString("id")}`)
})